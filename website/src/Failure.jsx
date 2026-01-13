import "./Payment.css";

function Failure() {
  return (
    <div className="page-wrapper">
      <div className="failure-card">
        <h1>❌ Payment Failed</h1>
        <p>Please try again</p>
      </div>
    </div>
  );
}

export default Failure;