import PropTypes from 'prop-types';
import shortid from 'shortid';
import { BtnFeedback } from './BtnFeedback';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <BtnFeedback
          key={shortid.generate()}
          text={option}
          onClick={() => onLeaveFeedback(option)}
        />
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
