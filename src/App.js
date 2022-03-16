import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/feedback/FeedbackList";
import FeedbackStats from "./components/feedback/FeedbackStats";
import FeedBackForm from "./components/feedback/FeedBackForm";
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    console.log("Delete From App: " + id);
    if (window.confirm("Do you want to delete?")) {
      setFeedback(feedback.filter((f) => f.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    setFeedback([...feedback, newFeedback]);
  };
  return (
    <>
      {/* pass in Feedback UI to Header props */}
      <Header text="Feedback UI" />
      <div className="container">
        <FeedBackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <h1 className="text-primary">My App</h1>
        <FeedbackList feedbacks={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};

export default App;
