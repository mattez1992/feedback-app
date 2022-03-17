import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedbackList from "./components/feedback/FeedbackList";
import FeedbackStats from "./components/feedback/FeedbackStats";
import FeedBackForm from "./components/feedback/FeedBackForm";
import AboutPage from "./pages/AboutPage";
import AboutLink from "./components/shared/AboutLink";
import { FeedbackProvider } from "./components/context/feedback/FeedbackContext";
const App = () => {
  return (
    <>
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
                    <FeedBackForm />
                    <FeedbackStats />
                    <h1 className="text-primary">My App</h1>
                    <FeedbackList />
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
