import React, { Component } from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import * as ST from "./settings/settings";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return <Layout></Layout>;
  }
}

export default App;
