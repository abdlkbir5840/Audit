import React from 'react';
import home from '../assets/home.jpg';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <header className="py-5 mt-3">
      <div className="container px-5 pb-5">
        <div className="row gx-5 align-items-center">
          <div className="col-xxl-5">
            <div className="text-center text-xxl-start">
              <div className="fs-3 fw-light text-muted">I can help your business to</div>
              <h1 className="display-3 fw-bolder  mb-5"><span className="text-gradient d-inline">Get AI auditing, and grow fast</span></h1>
              <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                <a className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" href="resume.html">Learn More</a>
                <Link to="/audit-achats"> 
                  <a className="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder" href="projects.html" >Start Prediction</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-7">
            <div className="d-flex justify-content-center mt-5 mt-xxl-0">
              <div className="profile bg-gradient-primary-to-secondary">
                <img className="profile-img" src={home} alt="..." /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
