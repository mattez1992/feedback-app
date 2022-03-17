import React,{useContext} from "react";
import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
import { motion } from "framer-motion";
import FeedbackContext from "../context/feedback/FeedbackContext";

const FeedbackList = () => {
  const feedbackContext = useContext(FeedbackContext);
  const {feedbacks,deleteFeedback} = feedbackContext;
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
            handleDelete={deleteFeedback}
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

export default FeedbackList;
