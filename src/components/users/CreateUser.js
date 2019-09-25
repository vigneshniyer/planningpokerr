import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createUser } from '../../store/actions/userActions';
import { joinRoom } from '../../store/actions/roomActions';

class CreateUser extends Component {
	state = {
		name: ''
	}

	handleChange = (e) => {
		this.setState({
		[e.target.id]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.createUser(this.state);
		console.log("USER -> ", this.props)
		// this.props.history.push('/enterRoom');
	}
	render() {
		if(this.props.user && this.props.user.id && this.props.location && this.props.location.state && this.props.location.state.redirectRoom){
			let roomId = this.props.location.state.redirectRoom.split('/')[2];
			this.props.joinRoom({'id':roomId});
			return <Redirect to= {this.props.location.state.redirectRoom} />
		}
		else if (this.props.user && this.props.user.id) {
			return <Redirect to= {'/enterRoom'} />
		}
		console.log("Props : ", this.props.location)
		return (
		<div className="container">
			<form className="white" onSubmit={this.handleSubmit}>
			<h5 className="grey-text text-darken-3">Create User</h5>
			<div className="input-field">
				<label htmlFor="name">Username</label>
				<input type="text" id='name' onChange={this.handleChange} />
			</div>
			<div className="input-field">
				<button className="btn pink lighten-1 z-depth-0">Create User</button>
			</div>
			</form>
		</div>
		)
	}
}

const mapStateToProps = (state) => {
	return { 
		user: state.user
	 };
}

const mapDispatchToProps = (dispatch)=> {
	return {
		createUser: (name) => dispatch(createUser(name)),
		joinRoom: (room) => dispatch(joinRoom(room))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)