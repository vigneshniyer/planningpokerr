import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux';
import { createRoom, joinRoom } from '../../store/actions/roomActions';
import Dropzone from 'react-dropzone'
import M from 'materialize-css';

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

	handleCreateSubmit = (e) => {
		e.preventDefault();
		if(this.state && this.state.name)
			this.props.createRoom(this.state);
		else
			alert("Enter a Valid Room Name! ");

	}

	handleJoinSubmit = (e) => {
		e.preventDefault();
		this.props.joinRoom(this.state);
	}

	handleFileDrop = (acceptedFiles) =>{
		if (acceptedFiles.length === 1) {
			let file = acceptedFiles[0];
			if(file.type == 'text/rtf' || file.type == 'text/plain'){
				const reader = new FileReader()
				reader.onabort = () => alert('File reading was aborted')
				reader.onerror = () => alert('File reading has failed')
				reader.onload = () => {
					const fileContents = reader.result
					let userStories = fileContents.split('\n').filter(story =>{
						return story.length>0
					})
					
					this.setState({...this.state, stories: userStories})
					let options = {
						displayLength: 2500,
						classes: 'rounded',
						html: 'User Stories Loaded'
					}
					M.toast(options)
				  
				}
				acceptedFiles.forEach(file => reader.readAsBinaryString(file))
				
			}
			else {
				alert("Choose a valid txt/rtf file!");
			}
		  } else { 
			  alert("Choose 1 text file!");
		  }
		
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

					<div id="create-room-tab" >
						<form className="white mt-0" onSubmit={this.handleCreateSubmit}>
							<h5 className="grey-text text-darken-3">Create Room</h5>
							<div className="input-field">
								<i className="material-icons prefix">account_balance</i>
								<input type="text" id='name' onChange={this.handleChange} />
								<label htmlFor="name">Room Name</label>
							</div>
							<div className="upload-border center-align cursor-pointer">
								
								<Dropzone onDrop={acceptedFiles => this.handleFileDrop(acceptedFiles)}>
								{({getRootProps, getInputProps}) => (
									<section>
									<div {...getRootProps()}>
										<input {...getInputProps()} />
										<p>To import user stories automatically, drag and drop a .txt file containing user stories separated by line</p>
										<div>
										<i className="large material-icons">cloud_upload</i>
										</div>
									</div>
									</section>
								)}
								</Dropzone>
								
							</div>
							
							<div className="input-field">
								<button className="btn pink lighten-1 z-depth-0">Create Room</button>
							</div>
						</form>
					</div>
						
					<div id="join-room-tab" >
						<form className="white mt-0" onSubmit={this.handleJoinSubmit}>
							<h5 className="grey-text text-darken-3">Join Room</h5>
							<div className="input-field">
								
								<i className="material-icons prefix">fingerprint</i>
								<input type="text" id='id' onChange={this.handleChange} />
								<label htmlFor="id">Room ID</label>
							</div>
							<div className="input-field">
								<button className="btn pink lighten-1 z-depth-0">Join Room</button>
							</div>
						</form>
					</div>
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