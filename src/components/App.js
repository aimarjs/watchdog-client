import React, { Component } from "react";
// import { connect } from "react-redux";
import io from "socket.io-client";

// import * as actions from "../store/actions/logsActions";
import "./App.css";

class App extends Component {
  state = {
    response: null,
    endpoint: "http://localhost:5000"
  };

  componentDidMount() {
    let socket = io.connect("http://localhost:5000", {
      transport: ["websocket"]
    });
    socket.on("FromAPI", data => this.setState({ response: data }));
  }

  render() {
    const { response } = this.state;
    return (
      <div style={{ textAlign: "center" }}>
        {response ? response.count : <p>loading..</p>}
      </div>
    );
  }
}

export default App;
