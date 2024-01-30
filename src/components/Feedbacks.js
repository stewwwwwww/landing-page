import React from "react";
import "../styles/Feedbacks.css";
import { feedbackData } from "../data/data";
import quote from "../assets/quote.png";

function Feedbacks() {
  return (
    <div className="feedbacksContainer">
      <h5>Feedbacks</h5>
      <div className="linear6"></div>
      <h2>Customers' Compliments</h2>
      <div className="feedbackItems">
        {feedbackData.splice(0, 4).map((data, i) => (
          <div className="feedbackItem" key={i}>
          <img src={quote} alt="quote" className="feedbackquoteimg" />
          <img src={data.img} alt="celeb" className="celebimg" />
          <p className="feedbackquote">
           {data.feedback}
          </p>
          <h4>{data.name}</h4>
          <p className="feedbackjob">{data.title}</p>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Feedbacks;
