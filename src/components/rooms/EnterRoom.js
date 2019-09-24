import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux';
import { createRoom } from '../../store/actions/roomActions';
import { joinRoom } from '../../store/actions/roomActions'
import { firestoreConnect } from 'react-redux-firebase';

class EnterRoom extends Component {
	// state = {
	// 	name: '',
	// 	id: ''
	// }

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		})
	}

	handleCreateSubmit = (e) => {
		e.preventDefault();
		this.props.createRoom(this.state);

	}

	handleJoinSubmit = (e) => {
		e.preventDefault();
		this.props.joinRoom(this.state);
	}
	render() {
		const { room, auth, user } = this.props;
		
		if (user && !user.id) {
			return <Redirect to="/createUser" />
		}
		// return <Redirect to="/createUser" />

		if (room && room.id) {
			return <Redirect to= {'/room/'+room.id} /> 
		}
		
		return (
			<div className="container">
				<form className="white" onSubmit={this.handleCreateSubmit}>
				<h5 className="grey-text text-darken-3">Create Room</h5>
				<div className="input-field">
					<label htmlFor="name">Room Name</label>
					<input type="text" id='name' onChange={this.handleChange} />
				</div>
				<div className="input-field">
					<button className="btn pink lighten-1 z-depth-0">Create Room</button>
				</div>
				</form>

				<form className="white" onSubmit={this.handleJoinSubmit}>
				<h5 className="grey-text text-darken-3">Join Room</h5>
				<div className="input-field">
					<label htmlFor="id">Room ID</label>
					<input type="text" id='id' onChange={this.handleChange} />
				</div>
				<div className="input-field">
					<button className="btn pink lighten-1 z-depth-0">Join Room</button>
				</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	if(state)
		console.log("state is -> ", state)
	return {
		room: state.room,
		user: state.user
	}
}

const mapDispatchToProps = (dispatch)=> {
	return {
		createRoom: (room) => dispatch(createRoom(room)),
		joinRoom: (room) => dispatch(joinRoom(room))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterRoom);