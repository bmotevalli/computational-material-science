import React, { Component } from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import * as ST from "./settings/settings";
import { Switch, Route } from "react-router-dom";
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react'

Amplify.configure(awsconfig)

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <Layout></Layout>
      </React.Fragment>
    );
  }
}

export default withAuthenticator(App);
