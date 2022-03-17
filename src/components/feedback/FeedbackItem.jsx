import React,{useContext} from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Card from "../shared/Card";
import FeedbackContext from "../context/feedback/FeedbackContext";

const FeedbackItem = ({ feedback, }) => {
  const feedbackContext = useContext(FeedbackContext);
  const {deleteFeedback, editFeedback} = feedbackContext;
  return (
    <Card>
      <div className="num-display">{feedback.rating}</div>
      <button onClick={() => deleteFeedback(feedback.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() =>editFeedback(feedback)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{feedback.text}</div>
    </Card>
  );
};
FeedbackItem.propTypes = {
  feedback: PropTypes.object.isRequired,
};
export default FeedbackItem;
