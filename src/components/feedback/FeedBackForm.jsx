import React, { useState } from "react";
import Card from "../shared/Card";
import Button from "../shared/Button";
import RatingSelect from "./RatingSelect";
const FeedBackForm = ({ handleAdd }) => {
  const [feedback, setFeedback] = useState({
    id: Math.floor(Math.random() * 1000),
    rating: 0,
    text: "",
  });
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState();
  const { rating, text } = feedback;

  const onTextChanged = (e) =>
   { 
     if(text === ""){
       setBtnDisabled(true);
       setMessage(null)
     }else if(text !== "" && text.trim().length <= 10){
       setMessage("Text must be at least 10 characters")
       setBtnDisabled(true);
     }else{
       setMessage(null);
       setBtnDisabled(false)
     }
     setFeedback({ ...feedback, [e.target.name]: e.target.value })
    };
  const onRatingChanged = (e) =>
    setFeedback({ ...feedback, [e.target.name]: parseInt(e.target.value) });

  const onSubmit = (e) => {
    e.preventDefault();
    handleAdd(feedback);
    setFeedback({
      id: Math.floor(Math.random() * 1000),
      rating: 0,
      text: "",
    });
    setBtnDisabled(true);
    setMessage(null);
  };
  return (
    <Card>
      <form onSubmit={onSubmit}>
        <h2 className="text-primary">Add feedback</h2>
        <RatingSelect select={onRatingChanged} selected={rating} />
        <div className="input-group">         
          <input
            type="text"
            placeholder="write a review"
            name="text"
            value={text}
            onChange={onTextChanged}
            required
          />
          <Button type="submit" isDiabled={btnDisabled}>Add</Button>
        </div>
        {message && <div className="messsage">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedBackForm;