import { useContext } from "react";
import FeedbackContext from "../context/feedback/FeedbackContext";


function FeedbackStats() {
  const { feedbacks } = useContext(FeedbackContext);

  // NOTE: simpler average calculation
  // Calculate ratings avg
  let average = Math.round(
    feedbacks.reduce((acc, { rating }) => acc + rating, 0) / feedbacks.length
  );

  // average = average.toFixed(1).replace(/[.,]0$/, "");
  // average = Math.round(average);

  return (
    <div className="feedback-stats">
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}
export default FeedbackStats;
