import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      text: "This is from the context",
      rating: 8,
    },
  ]);
  const addFeedback = (newFeedback) => {
    setFeedbacks([newFeedback, ...feedbacks]);
  };
  const deleteFeedback = (id) => {
    console.log("Delete From App: " + id);
    if (window.confirm("Do you want to delete?")) {
      setFeedbacks(feedbacks.filter((f) => f.id !== id));
    }
  };
  // any values like state or functions that should be available to the children should be passed in to the value prop
  return (
    <FeedbackContext.Provider
      value={{ feedbacks, addFeedback, deleteFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
