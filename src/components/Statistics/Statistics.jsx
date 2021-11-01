import PropTypes from 'prop-types';
import { Feedback, FeedbackList } from './Statistics.styled';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => {
  return (
    <Feedback>
      <FeedbackList>Good: {good}</FeedbackList>
      <FeedbackList>Neutral: {neutral}</FeedbackList>
      <FeedbackList>Bad: {bad}</FeedbackList>
      <FeedbackList>Total: {total}</FeedbackList>
      {bad > 0 && (
        <FeedbackList>Positive Feedback: {positivePercentage}%</FeedbackList>
      )}
    </Feedback>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
export default Statistics;
