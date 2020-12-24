import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class AppCard extends Component {
  render() {
    return (
      <div className="card col-3" style={{ margin: "10px" }}>
        <img src={this.props.srcImg} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{this.props.cardTitle}</h5>
          <p className="card-text">{this.props.cardTxt}</p>
          <NavLink to={this.props.link} className="btn btn-primary">
            Launch
          </NavLink>
        </div>
      </div>
    );
  }
}

export default AppCard;
