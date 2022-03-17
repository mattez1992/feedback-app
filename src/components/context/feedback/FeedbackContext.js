import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      text: "This is from the context",
      rating: 8,
    },
    {
      id: 2,
      rating: 9,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
    {
      id: 3,
      rating: 8,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.",
    },
  ]);

  const [editState, setEditState] = useState({
    item: {},
    edit: false,
  });
  const editFeedback = (feedback) => {
    setEditState({ item: feedback, edit: true });
  };
  const updateFeedback = (feedback) => {
    setFeedbacks(feedbacks.map((f) => (f.id === feedback.id ? feedback : f)));
    console.log("updated:" + feedback);
    resetEditState();
  };
  const resetEditState = () => {
    setEditState({
      item: {},
      edit: false,
    });
  };
  const addFeedback = (newFeedback) => {
    setFeedbacks([newFeedback, ...feedbacks]);
  };
  const deleteFeedback = (id) => {
    console.log("Delete From App: " + id);
    if (window.confirm("Do you want to delete?")) {
      setFeedbacks(feedbacks.filter((f) => f.id !== id));
    }
    resetEditState();
  };
  // any values like state or functions that should be available to the children should be passed in to the value prop
  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        editState,
        editFeedback,
        addFeedback,
        deleteFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
export default FeedbackContext;
