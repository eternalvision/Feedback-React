import { Button } from './FeedbackOptions.styled';

export function BtnFeedback(props) {
  return (
    <Button type="button" onClick={props.onClick}>
      {props.text}
    </Button>
  );
}
