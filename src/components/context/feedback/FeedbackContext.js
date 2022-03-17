import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editState, setEditState] = useState({
    item: {},
    edit: false,
  });
  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    const response = await fetch("/feedback");
    const data = await response.json();
    setFeedbacks(data);
    setIsLoading(false);
  };
  const editFeedback = (feedback) => {
    setEditState({ item: feedback, edit: true });
  };
  const updateFeedback = async (feedback) => {
    const response = await fetch(`/feedback/${feedback.id}`, {
      method: "PUT",
      body: JSON.stringify(feedback),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setFeedbacks(feedbacks.map((f) => (f.id === data.id ? data : f)));
    resetEditState();
  };
  const resetEditState = () => {
    setEditState({
      item: {},
      edit: false,
    });
  };
  const addFeedback = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      body: JSON.stringify(newFeedback),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    setFeedbacks([newFeedback, ...data]);
  };
  const deleteFeedback = async (id) => {
    if (window.confirm("Do you want to delete?")) {
      setFeedbacks(feedbacks.filter((f) => f.id !== id));
      await fetch("/feedback/" + id, {
        method: "DELETE",
      });
    }
    resetEditState();
  };
  // any values like state or functions that should be available to the children should be passed in to the value prop
  return (
    <FeedbackContext.Provider
      value={{
        feedbacks,
        editState,
        isLoading,
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
