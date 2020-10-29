import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import axios from "axios";

import { Loader } from "./components/Loader";
import { Application } from "./components/Application";
import { Header } from "./components/Header";

import "./App.css";

class App extends React.Component {
  state = {};

  async componentDidMount() {
    const { data: info } = await axios(
      "https://rickandmortyapi.com/api/character"
    );

    this.setState({
      chars: info.results,
    });
  }

  render() {
    if (!this.state.chars) {
      return (
        <Router>
          <Route path="/">
            <Redirect to="/RickAndMorty" />
          </Route>
          <Route path="/RickAndMorty">
            <Loader />
          </Route>
        </Router>
      );
    }

    return (
      <Router>
        <Route path="/">
          <Redirect to="/RickAndMorty" />
        </Route>
        <Route path="/RickAndMorty">
          <Header />
          <Application chars={this.state.chars} />
        </Route>
      </Router>
    )
  }
}

export default App;
