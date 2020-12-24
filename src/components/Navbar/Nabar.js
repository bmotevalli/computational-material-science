import React, { Component } from "react";
import NavigationItem from "./NavbarItem/NavbarItem";
import { connect } from "react-redux";
import * as ST from "../../settings/settings";
import {AmplifySignOut} from '@aws-amplify/ui-react'

class Navbar extends Component {
  render() {
    let Style = {
      marginLeft: ST.SIDE_MENU.CLOSED,
      zIndex: "500",
    };
    if (this.props.isExpanded) {
      Style["marginLeft"] = ST.SIDE_MENU.OPENED;
    }

    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={Style}
      >
        <div
          className="collapse navbar-collapse"
          style={{ marginLeft: "30px" }}
        >
          <ul className="navbar-nav mr-auto">
            <NavigationItem link={ST.ROUTES.MAINVIEW.HOME.PATH} exact>
              Home
            </NavigationItem>
            <AmplifySignOut/>
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isExpanded: state.isSideMenuExpanded,
  };
};

export default connect(mapStateToProps)(Navbar);
