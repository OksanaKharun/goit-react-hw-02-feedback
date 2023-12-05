function Statistics({ good, bad, neutral,total, positivePercentage}) {
 
  return (
    <div className="text-wrapper">
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive Feedbacks: {positivePercentage} %</p>
    </div>
  );
}

export default Statistics;
