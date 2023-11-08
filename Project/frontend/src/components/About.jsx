import React from "react";

export default function About() {
  return (
    <section className="bg-light py-5" id="about">
      <div className="container px-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-xxl-8">
            <div className="text-center my-5">
              <h2 className="display-5 fw-bolder">
                <span className="text-gradient d-inline">About The System</span>
              </h2>
              <p className="lead fw-light mb-4">
                Machine Learning in Auditing: 🔄 Revolutionizing Risk Assessment
                and 🔍 Fraud Detection
              </p>
              <p className="text-muted">
                Machine learning is a subset of artificial intelligence (AI)
                that focuses on developing algorithms and models capable of
                learning from data and making predictions or decisions without
                explicit programming instructions. In the context of auditing,
                machine learning algorithms are trained on historical data to
                recognize patterns and anomalies, allowing auditors to assess
                risks more accurately and detect fraudulent activities that may
                have eluded traditional methods.
              </p>
              {/* <div className="d-flex justify-content-center fs-2 gap-4">
                <a className="text-gradient" href="#!">
                  <i className="bi bi-twitter"></i>
                </a>
                <a className="text-gradient" href="#!">
                  <i className="bi bi-linkedin"></i>
                </a>
                <a className="text-gradient" href="#!">
                  <i className="bi bi-github"></i>
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
