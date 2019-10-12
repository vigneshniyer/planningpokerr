import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import M from 'materialize-css';

class JoinRoom extends Component {
    
    constructor(props) {
		super(props);
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
        return(
            <div id="join-room-tab" >
                <form className="white mt-0" onSubmit={this.handleJoinSubmit}>
                    <h5 className="grey-text text-darken-3">Join Room</h5>
                    <div className="input-field">
                        <i className="material-icons prefix">fingerprint</i>
                        <input type="text" id='id' onChange={this.handleChange} />
                        <label htmlFor="id">Room ID</label>
                    </div>
                    <div className="input-field">
                        <button className="btn blue z-depth-0">Join Room</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default JoinRoom;