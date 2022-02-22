import PropTypes from "prop-types";
import { Insert } from "./Statistics.styled";

export default function Statistics({ good, neutral, bad, total, percentage }) {
  return (
    <ul>
      <li>
        <Insert>Good: {good}</Insert>
      </li>
      <li>
        <Insert>Neutral: {neutral}</Insert>
      </li>
      <li>
        <Insert>Bad: {bad}</Insert>
      </li>
      <li>
        <Insert>Total: {total}</Insert>
      </li>
      <li>
        <Insert>Positive feedback: {percentage} %</Insert>
      </li>
    </ul>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
