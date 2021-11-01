import { useState } from 'react';
import Section from '../Section/Section';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import { Conteiner } from './App.styled';

export default function App() {
  const [state, setState] = useState({ good: 0, neutral: 0, bad: 0 });
  const { good, neutral, bad } = state;

  const onLeaveFeedback = value => {
    setState(prevState => ({ ...prevState, [value]: prevState[value] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };
  const countPositiveFeedbackPercentage = () => {
    const percentage = (good / countTotalFeedback()) * 100;
    return Number(percentage.toFixed());
  };

  const isShowStatistics = countTotalFeedback() > 0;
  const options = Object.keys(state);

  return (
    <Conteiner>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {isShowStatistics && (
          <Statistics
            bad={bad}
            good={good}
            neutral={neutral}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
        {!isShowStatistics && <Notification message="No feedback given" />}
      </Section>
    </Conteiner>
  );
}
