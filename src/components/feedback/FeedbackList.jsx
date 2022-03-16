import React from "react";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedbacks, handleDelete }) => {
  if (feedbacks === null || feedbacks.length < 1) {
    return <p>No feedbacks made</p>;
  }
  return (
    <div className="feedback-list">
      {feedbacks.map((feedback) => (
        <FeedbackItem
          feedback={feedback}
          handleDelete={handleDelete}
          key={feedback.id}
        />
      ))}
    </div>
  );
};
FeedbackList.propTypes = {
  feedbacks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func.isRequired,
};
export default FeedbackList;
