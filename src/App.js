import React, { useState } from "react";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackList from "./components/feedback/FeedbackList";
import FeedbackStats from "./components/feedback/FeedbackStats";
import FeedBackForm from "./components/feedback/FeedBackForm";
import AboutPage from "./pages/AboutPage";
import AboutLink from "./components/shared/AboutLink";
import { FeedbackProvider } from "./components/context/feedback/FeedbackContext";
const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteFeedback = (id) => {
    console.log("Delete From App: " + id);
    if (window.confirm("Do you want to delete?")) {
      setFeedback(feedback.filter((f) => f.id !== id));
    }
  };
  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <>
      {/* pass in Feedback UI to Header props */}
      <FeedbackProvider>
        <Router>
          <Header text="Feedback UI" />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedBackForm handleAdd={addFeedback} />
                    <FeedbackStats feedback={feedback} />
                    <h1 className="text-primary">My App</h1>
                    <FeedbackList
                      feedbacks={feedback}
                      handleDelete={deleteFeedback}
                    />
                  </>
                }
              />

              <Route exact path="/about" element={<AboutPage />} />
            </Routes>
          </div>
          <AboutLink />
        </Router>
      </FeedbackProvider>
    </>
  );
};

export default App;
