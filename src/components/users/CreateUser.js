import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createUser } from '../../store/actions/userActions'

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
		if (this.props.user && this.props.user.id) {
			return <Redirect to= {'/enterRoom'} />
		}
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
	console.log("STAE I S : ", state);
	return { 
		user: state.user
	 };
}

const mapDispatchToProps = (dispatch)=> {
	return {
		createUser: (name) => dispatch(createUser(name))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser)