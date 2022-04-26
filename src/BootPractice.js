import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const BootPractice = () => {
  return (
    <>
      <div className="container">
        <h1>hello</h1>
        <button type="button" className="btn btn-primary">
          Primary
        </button>
        <button type="button" className="btn btn-secondary">
          Secondary
        </button>
        <button type="button" className="btn btn-success">
          Success
        </button>
        <button type="button" className="btn btn-danger">
          Danger
        </button>
        <button type="button" className="btn btn-warning">
          Danger{" "}
        </button>
        <button type="button" className="btn btn-info">
          Info
        </button>
        <button type="button" className="btn btn-light">
          Light
        </button>
        <button type="button" className="btn btn-dark">
          Dark
        </button>

        <button type="button" className="btn btn-link">
          Link
        </button>
      </div>
    </>
  );
};

export default BootPractice;
