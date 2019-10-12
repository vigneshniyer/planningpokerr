import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { updateCurrentStory, toggleRound, castVote, leaveRoom, sendMessage} from '../../store/actions/roomActions'
import M from 'materialize-css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import SweetAlert from 'sweetalert2-react';
import RoomHeader from './RoomHeader';
import ShareRoom from './ShareRoom';
import CurrentStory from './CurrentStory';
import VotingCards from './VotingCards';
import UserStories from './UserStories';
import RoundResults from './RoundResults';
import RoundHistory from './RoundHistory';
import ChatWindow from './ChatWindow';

class Room extends Component {

    state = {
      showAlert: false  
    }

    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        window.addEventListener('beforeunload', this.keepOnPage);
        window.addEventListener('unload', this.keepOnPage);
        window.addEventListener('pagehide', this.keepOnPage);
        var elems = document.querySelectorAll('.modal');
        M.Modal.init(elems);
        var ddelems = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(ddelems);
        var sideElems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sideElems);
    }
    
    componentWillUnmount() {
        window.removeEventListener('beforeunload', this.keepOnPage);
        window.addEventListener('unload', this.keepOnPage);
        window.addEventListener('pagehide', this.keepOnPage);
    }

    keepOnPage = (e) => {
        this.props.leaveRoom(this.props.roomTest);
        return undefined;
    }

	render() {
        
        const {user } = this.props;

        if (user && user.clickedExit) {
            return <Redirect to={{
                pathname: '/createUser',
            }} 
            />
        }

        if (user && !user.id && !user.clickedExit) {
            return <Redirect to={{
                pathname: '/createUser',
                state: { 
                    redirectRoom: this.props.history.location.pathname,
                }
            }} 
            />
        }
        
        return (
            <div>
                <RoomHeader { ...this.props } />
                <ShareRoom { ...this.props } />
                <div className="row">
                    <div className="col s12 m6 l6">
                        <CurrentStory { ...this.props } />
                        <VotingCards { ...this.props } />
                        <UserStories { ...this.props } />
                    </div>
                    <div className="col s12 m6 l6">
                        <RoundResults { ...this.props } />   
                        <RoundHistory {...this.props} />
                    </div>
                </div>
                <ChatWindow {...this.props} />
                <SweetAlert
                    show={this.state.showAlert}
                    text="Enter / Select Story to Start Round"
                    onConfirm={() => this.setState({ showAlert: false })}
                />

            </div>

        )

	}
}

const mapStateToProps = (state) => {
    let room = state.firestore.ordered.rooms && state.firestore.ordered.rooms[0] ? state.firestore.ordered.rooms[0] : null;
	return {
        room: room,

        currentStory: room ? room.currentStory : "",

        messageList: room ? room.messageList : [],

        stories: room ? 
        room.stories : [],

        currentScore: room ? room.currentScore : "",

        activeRound: room ? room.activeRound : false,

        moderator: room ? room.moderator : null,

        roundsHistory: room ? room.roundsHistory : [],

        user: state.user,
        localRoom:state.room,
        leaveRoom: state.room.leaveRoom,

        roomTest: room ? room : null,

        userList: room ? room.users : [] 

	}
}

const mapDispatchToProps = (dispatch)=> {
	return {
        // createRoom: (name) => dispatch(createRoom(name))
        updateCurrentStory: (story) => dispatch(updateCurrentStory(story)),
        toggleRound: (toggle) => dispatch(toggleRound(toggle)),
        castVote: (currentVote) => dispatch(castVote(currentVote)),
        leaveRoom: (room) => dispatch(leaveRoom(room)),
        sendMessage: (data) => dispatch(sendMessage(data)),
        // readMessage: (data) => dispatch(readMessage(data)),
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