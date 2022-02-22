import PropTypes from "prop-types";
import { BtnList, Item, Button } from "./FeedbackOptions.styled";

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <BtnList>
      {Object.keys(options).map((el) => {
        return (
          <Item key={el}>
            <Button
              type="button"
              name={el}
              onClick={() => {
                onLeaveFeedback(el);
              }}
            >
              {el}
            </Button>
          </Item>
        );
      })}
    </BtnList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func,
};
