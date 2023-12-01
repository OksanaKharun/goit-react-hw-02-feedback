import React from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div  className="btn-wrapper">
    {options.map((option) => (
      <button className="btn" key={option} onClick={() => onLeaveFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;