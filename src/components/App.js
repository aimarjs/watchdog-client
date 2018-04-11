import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';

import * as actions from '../store/actions/logsActions';
import './App.css';

class App extends Component {
	state = {
		response: null,
		endpoint: 'http://localhost:5000'
	};

	componentDidMount() {
		this.props.initialize();
	}

	render() {
		const { response } = this.state;

		console.log(this.props.logs);

		const options = {
			transports: ['websocket'],
			upgrade: false,
			'force new connection': true
		};

		const socket = io.connect('http://localhost:5000', options);
		socket.on('NewLog', data => this.setState({ response: data }));

		return (
			<div style={{ textAlign: 'center' }}>
				{response ? response.status : <p>200</p>}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.logs.loading,
		error: state.logs.error,
		success: state.logs.success,
		logs: state.logs.entries
	};
};

const mapDispatchToProps = dispatch => {
	return {
		initialize: () => dispatch(actions.fetchLogs())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
