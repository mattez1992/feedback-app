import React from "react";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
import { motion, AnimatePresence } from "framer-motion";

const FeedbackList = ({ feedbacks, handleDelete }) => {
  if (feedbacks === null || feedbacks.length < 1) {
    return <p>No feedbacks made</p>;
  }
  // with framer animation
  return (
    <div className="feedback-list">
      {feedbacks.map((feedback) => (
        <motion.div key={feedback.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <FeedbackItem
            feedback={feedback}
            handleDelete={handleDelete}
            key={feedback.id}
            />
        </motion.div>       
      ))}
    </div>
  );
  // return (
  //   <div className="feedback-list">
  //     {feedbacks.map((feedback) => (
  //       <FeedbackItem
  //         feedback={feedback}
  //         handleDelete={handleDelete}
  //         key={feedback.id}
  //       />
  //     ))}
  //   </div>
  // );
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
