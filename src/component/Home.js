import React, { Component } from "react";
import ReactWOW from "react-wow";

export default class Home extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div className="absoluteContent">
          <div className="container">
            <div className="row mb-5">
              <div className="col-sm-4 mx-auto">
                <img
                  classname="img-fluid"
                  src="../images/sync.svg"
                  alt="React Js"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <ReactWOW animation="bounceInLeft">
                  <h2>
                    WHY DO WE <span>USE IT</span>?
                  </h2>
                </ReactWOW>
                <ReactWOW animation="bounceInLeft" delay=".5s">
                  <div className="r_btn active mr-3 mt-3">Resume</div>
                </ReactWOW>
                <ReactWOW animation="bounceInLeft" delay=".8s">
                  <div className="r_btn mt-3">Portfolio</div>
                </ReactWOW>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
