import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux';
import uuid from "uuid";
import { firestoreConnect } from 'react-redux-firebase';
import { updateCurrentStory, toggleRound, castVote } from '../../store/actions/roomActions'


class Room extends Component {

    state = {
        // test:''
    }

    handleChange = (e) => {
        e.preventDefault();
        let updateStory = {
            'id':this.props.room[0].id,
            'currentStory': e.target.value
        }
        this.props.updateCurrentStory(updateStory);
    }

    toggleRound = (toggle) =>{
        if(toggle && !this.props.currentStory) alert("Enter a story to start round.");
        else {
            let toggleRound = {
                'id':this.props.room[0].id,
                'activeRound': toggle,
                'currentStoryId': toggle ? uuid.v4() : null
            }
            this.props.toggleRound(toggleRound);
        }
    }

    castVote = (vote) =>{
        let currentVote = {
            'roomId':this.props.room[0].id,
            'userId': this.props.user.id,
            'userName': this.props.user.name,
            'vote': vote
        }
        console.log("Current vote ", currentVote);
        this.props.castVote(currentVote);
    }


	render() {
        // const id  = this.props.match.params.id;
        const {room, currentStory, activeRound, roundsHistory } = this.props;
        if (!this.props.user.id) return <Redirect to="/createUser" />
        // if (!room || !room[0].id) return <Redirect to="/enterRoom" />

		return (
			<div className="container">
                <h1>{room ? room[0].name : ""}</h1>
                <ul>
                    {room && room[0].users.map(user => {
                        let userVoteObj = room[0].currentVotes.find(obj => {
                            return obj.userId === user.id
                        });
                        let userVote = userVoteObj ? userVoteObj.vote : '?'
                        return (
                            <li key={user.id}>{user.name} - {userVote}</li>
                        )
                    })}
                </ul>
                <input type="text" id="currentStory" value={currentStory} onChange={this.handleChange} readOnly={ activeRound } placeholder="Enter Story ...."/>

                { activeRound ? 
                <button className="btn pink lighten-1 z-depth-0" onClick={()=>this.toggleRound(false)}>End</button> : 
                <button className="btn pink lighten-1 z-depth-0" onClick={()=>this.toggleRound(true)}>Start</button>}

                {
                    activeRound 
                    && !room[0].currentVotes.find(obj => {
                        return obj.userId === this.props.user.id
                    })
                ? 
                <div>
                    <h4>Choose Vote</h4>
                    <button className="btn pink lighten-1 z-depth-0" onClick={()=>this.castVote(1)}>1</button>
                    <button className="btn pink lighten-1 z-depth-0" onClick={()=>this.castVote(2)}>2</button>
                    <button className="btn pink lighten-1 z-depth-0" onClick={()=>this.castVote(3)}>3</button>
                    <button className="btn pink lighten-1 z-depth-0" onClick={()=>this.castVote(4)}>4</button>
                </div> : ''
                }

                <ul>
                    {
                        
                        roundsHistory && roundsHistory.map(round => {
                            return (
                                <li key={ round.storyId }>
                                    Story: { round.storyName }; Score: { round.score }
                                </li>
                            )
                        })
                    }
                </ul>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
    console.log("Room State -> ", state);
	return {
        room: state.firestore.ordered.rooms,
        currentStory: state.firestore.ordered.rooms ? state.firestore.ordered.rooms[0].currentStory : "",
        activeRound: state.firestore.ordered.rooms ? state.firestore.ordered.rooms[0].activeRound : false,
        roundsHistory: state.firestore.ordered.rooms ? state.firestore.ordered.rooms[0].roundsHistory : [],
        user: state.user
	}
}

const mapDispatchToProps = (dispatch)=> {
	return {
        // createRoom: (name) => dispatch(createRoom(name))
        updateCurrentStory: (story) => dispatch(updateCurrentStory(story)),
        toggleRound: (toggle) => dispatch(toggleRound(toggle)),
        castVote: (currentVote) => dispatch(castVote(currentVote))
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	firestoreConnect(
        props => {
            const id  = props.match.params.id;
            return [{
                collection: 'rooms', 
                doc: id
            }]
          }
        
	)
)(Room);