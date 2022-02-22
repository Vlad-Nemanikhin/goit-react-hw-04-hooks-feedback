import "./App.css";
import FeedbackOptions from "./Feedback";
import SectionTitle from "./Section";
import Statistics from "./Statistics";
import { useState } from "react";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countFeedbacks = () => {
    return good + neutral + bad;
  };

  const countPercentage = () => {
    const percents = Math.trunc((good / countFeedbacks()) * 100);
    return percents;
  };

  const handleScore = (item) => {
    switch (item) {
      case "good":
        setGood((prev) => prev + 1);
        break;

      case "neutral":
        setNeutral((prev) => prev + 1);
        break;

      case "bad":
        setBad((prev) => prev + 1);
        break;

      default:
        return;
    }
  };

  return (
    <>
      <SectionTitle title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleScore}
        />
      </SectionTitle>
      <SectionTitle title="Statistics">
        {countFeedbacks() === 0 ? (
          <p style={{ fontSize: 25 }}>No feedback given</p>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countFeedbacks()}
            percentage={countPercentage()}
          />
        )}
      </SectionTitle>
    </>
  );
}
