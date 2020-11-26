import React from "react";
import coat from "assets/images/coat_kenya.png";
import huduma from "assets/images/huduma.png";
import routes from "routes";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 main-div">
            <div className="header-image">
            <img src={huduma} alt="" className="main-img" />
            </div>
            <h2 className="main-title">
              Get your Huduma Card registration status and delivery address
              confirmation
            </h2>
            <p className="main-subtitle text-secondary">
              The purpose of this initiative is to create and manage a central
              master population database which will be the 'single source of
              truth' on a person's identity
            </p>
            <Link type="btn" class=" my-3 btn btn-danger" to={routes.details}>
              Get Started
            </Link>
          </div>
          <div className="col-md-4 d-none d-md-flex justify-content-center align-items-center">
            <img
              src={coat}
              alt=""
              style={{ width: "250px", height: "250px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
