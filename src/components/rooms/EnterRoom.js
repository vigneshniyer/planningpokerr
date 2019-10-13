import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createRoom, joinRoom } from '../../store/actions/roomActions';
import CreateRoom from './CreateRoom';
import M from 'materialize-css';
import JoinRoom from './JoinRoom';

class EnterRoom extends Component {


	componentDidMount() {
		let options = {
			swipeable: true,
			// responsiveThreshold: 500
		}
		M.Tabs.init(this.Tabs, options);
	}

	constructor(props) {
		super(props);
		// var instance = M.Tabs.init(el, options);
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value,
		})
	}

	handleJoinSubmit = (e) => {
		e.preventDefault();
		this.props.joinRoom(this.state);
	}

	render() {
		const { room, user } = this.props;
		
		if (user && !user.id) {
			return <Redirect to="/createUser" />
		}

		if(this.props.invalidRoom) {
			let options = {
				displayLength: 2000,
				classes: 'rounded',
				html: 'Invalid Room. Try Again!'
			}
			M.toast(options)
		}
		if (room && room.id) {
			return <Redirect to= {'/room/'+room.id} /> 
		}
		
		return (
			<div className="row">
				<div className="container mt-60">
					<ul ref={ Tabs => { this.Tabs = Tabs} } id="tabs-swipe-demo" className="tabs tabs-fixed-width tab-demo z-depth-1" >
						<li className="tab">
							<a href="#create-room-tab">Create Room</a>
						</li>
						<li className="tab">
							<a href="#join-room-tab">Join Room</a>
						</li>
					</ul>

					<CreateRoom 
						createRoom= {this.props.createRoom}
					/>

					<JoinRoom
						joinRoom = {this.props.joinRoom}
					/>
				</div>	
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		room: state.room,
		user: state.user,
		invalidRoom: state.room.invalidRoom,
		stories: state.stories
	}
}

const mapDispatchToProps = (dispatch)=> {
	return {
		createRoom: (room) => dispatch(createRoom(room)),
		joinRoom: (room) => dispatch(joinRoom(room))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterRoom);