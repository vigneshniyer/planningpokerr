import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createUser } from '../../store/actions/userActions';
import { joinRoom } from '../../store/actions/roomActions';
import SweetAlert from 'sweetalert2-react';
import GuideCard from '../layout/GuideCard';

class CreateUser extends Component {
	state = {
		name: '',
		showAlert:false
	}

	handleChange = (e) => {
		this.setState({
		[e.target.id]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault();
		if(!this.state.name) {
			this.setState({showAlert:true});
		}
		else this.props.createUser(this.state);
	}
	render() {
		console.log("Create props", this.props);
		if(this.props.user && this.props.user.id && this.props.location && this.props.location.state && this.props.location.state.redirectRoom){
			console.log("Truee123");
			let roomId = this.props.location.state.redirectRoom.split('/')[2];
			this.props.joinRoom({'id':roomId});
			return <Redirect to= {this.props.location.state.redirectRoom} />
		}
		else if (this.props.user && this.props.user.id) {
			return <Redirect to= {'/enterRoom'} />
		}
		return (
		<div className="container">
			<form className="white" onSubmit={this.handleSubmit}>
			<h5 className="grey-text text-darken-3">Create User</h5>
			<div className="input-field">
				
				<i className="material-icons prefix">account_circle</i>
				<input type="text" id='name' className="validate" onChange={this.handleChange} />
				<label htmlFor="name">Username</label>
			</div>
			<div className="input-field">
				<button className="btn blue z-depth-0">Create User</button>
			</div>
			</form>
			<SweetAlert
				show={this.state.showAlert}
				text="Enter a valid username."
				onConfirm={() => this.setState({ showAlert: false })}
			/>

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