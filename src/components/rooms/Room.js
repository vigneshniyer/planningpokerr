import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux';
import uuid from "uuid";
import { firestoreConnect } from 'react-redux-firebase';
import { updateCurrentStory, toggleRound, castVote, leaveRoom, sendMessage} from '../../store/actions/roomActions'
import {CopyToClipboard} from 'react-copy-to-clipboard';
import 'react-sharingbuttons/dist/main.css';
import { Email, Facebook } from 'react-sharingbuttons';
import M from 'materialize-css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import {Launcher} from 'react-chat-window';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';



class Room extends Component {

    state = {
        
    }

    constructor(props) {
        super(props);
        this.state = {
            render: true //Set render state to false
        }
    }

    _onMessageWasSent(message) {
        if(message.type === 'text'){
            message.data.text= this.props.user.name + ' ➡️ ' + message.data.text;
        }
        else if(message.type === 'emoji') {
            message.type = "text"
            message.data.text = this.props.user.name + ' ➡️ ' + message.data.emoji
        }
        this.props.sendMessage({
            author: 'them',
            type: message.type,
            data: message.data
        })
    }

    _handleClick() {
        // this.props.readMessage({
        //     id: this.props.user.id
        // })
    }

    printDocument() {

        var doc = new jsPDF('p');
        var res = doc.autoTableHtmlToJson(document.getElementById("roundHistoryTable"));

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        var header = function(data) {
            doc.setFontSize(18);
            doc.setTextColor(40);
            doc.setFontStyle('normal');
            doc.text("Planning Poker - " + today, data.settings.margin.left, 50);
        };

        var options = {
            beforePageContent: header,
            margin:10,
            startY: doc.autoTableEndPosY() + 70
        };

        doc.autoTable(res.columns, res.data, options);

        doc.save("Planning Poker.pdf");
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

    handleChange = (e) => {
        e.preventDefault();
        let updateStory = {
            'id':this.props.room[0].id,
            'currentStory': e.target.value
        }
        this.props.updateCurrentStory(updateStory);
    }

    toggleRound = (toggle) => {

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
        this.props.castVote(currentVote);
    }

    copyUrl = () => {
        let options = {
            displayLength: 2000,
            classes: 'rounded',
            html: 'URL Copied'
        }
        M.toast(options)
    }
 
    keepOnPage = (e) => {
        this.props.leaveRoom(this.props.roomTest);
        return undefined;
    }

    assignStory = (story) => {
        let updateStory = {
            'id':this.props.room[0].id,
            'currentStory': story
        }
        this.props.updateCurrentStory(updateStory);
    }

	render() {
        
        

        const votes = [1, 2, 3, 5, 8, 13, 20, 40, 100];

        const { room, currentStory, currentScore, activeRound, roundsHistory, messageList, localRoom, stories } = this.props;
        
        const showRoundResult = currentScore 
        ? 
        <span className="right">{ currentScore } points</span>
        : 
        '';

        if (localRoom && !localRoom.id) return <Redirect to={{
                pathname: '/enterRoom',
            }} 
        />
        if (this.props.user && !this.props.user.id) return <Redirect to={{
                pathname: '/createUser',
                state: { 
                    redirectRoom: this.props.history.location.pathname,
                }
            }} 
        />

        let roomUrl = room && room[0].id ? 'https://nv-marioplan.firebaseapp.com/room/'+room[0].id:'';

        let currentUserVote = room && room[0].currentVotes.find(obj => {
            return obj.userId === this.props.user.id
        });

        const showVotingCards = votes.map(vote => {
                return (
                    vote < 20 ?
                        <img 
                            onClick={()=>this.castVote(vote)} 
                            className={ (currentUserVote && vote === currentUserVote.vote) 
                            ? "vote-selected mr-10 cursor-pointer" 
                            : "mr-10 cursor-pointer"} 
                            width="13%" height="13%" 
                            src={"/img/"+vote+".png"} 
                            key={vote}
                            alt={'Vote '+vote}
                        />
                    :
                        <img 
                            onClick={()=>this.castVote(vote)} 
                            className={ (currentUserVote && vote === currentUserVote.vote) 
                            ? 
                            "vote-selected mr-20 cursor-pointer" 
                            : "mr-20 cursor-pointer"} 
                            width="18%" height="18%" 
                            src={"/img/"+vote+".png"} 
                            key={vote}
                            alt={'Vote '+vote}
                        /> 
                );
        })

        const showUserStories = stories.map((story) => {
            return <a onClick={()=>this.assignStory(story)} key={story} href="#!" className={ currentStory && currentStory === story? "collection-item active": "collection-item"}>{story}</a>
        })
        
        
        let renderContainer = false //By default don't render anything
        if(this.state.render) { 
            renderContainer = <div>
            <div className="container">

                {/* Header */}
                <h3>
                    {room ? room[0].name : ""}
                    <a className="btn grey right hide-on-small-only" onClick={()=>{
                        {/* this.setState(user={}); */}
                        this.props.leaveRoom(this.props.roomTest)
                    
                        }}>
                        <i className="material-icons right">exit_to_app</i>
                        Exit
                    </a>
                    <a className="modal-trigger btn green right mr-10 hide-on-small-only" href="#share-modal" >
                        <i className="material-icons right">share</i>
                        Invite Team
                    </a>
                    <div className="hide-on-med-and-up right lighten-1">
                    <a className='dropdown-trigger btn btn-floating pink' href='#' data-target='dropdown1'><i className="material-icons right">menu</i></a>
                        <ul id='dropdown1' className='dropdown-content'>
                            <li>
                                <a className="modal-trigger" href="#share-modal">
                                    {/* <i className="material-icons right">share</i> */}
                                    Share
                                </a>
                            </li>
                            <li>
                                <a onClick={()=>{this.props.leaveRoom(this.props.roomTest)}}>
                                    {/* <i className="material-icons right">exit_to_app</i> */}
                                    Exit
                                </a>
                            </li>
                        </ul>
                    </div>
                </h3>

                {/* Share Modal */}
                <div id="share-modal" className="modal bottom-sheet">
                    <div className="modal-content center-align">
                        <h5>Share Room</h5>

                        <div className="row">
                            <div className="col s8 m8 l8 offset-l2 s-2 m-2">
                                <input type="text" readOnly value={roomUrl} />
                            </div>
                            <div className="col s2 m2 l2">
                                <CopyToClipboard text={roomUrl} onCopy={this.copyUrl}>
                                    <a className="btn-floating grey">
                                        <i className="material-icons right">content_copy</i>
                                    </a>
                                </CopyToClipboard>
                            </div>
                        </div>
                        
                        <div>
                            <Facebook url={roomUrl} />
                            <Email url={roomUrl} text={'Email'} subject={"Planning Poker: Join your team!"} />
                        </div>

                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close waves-effect waves-green btn-flat">Close</a>
                    </div>
                </div>

            </div>
            
            <div className="row">
                <div className="col s12 m6 l6">

                    {/* Current Story Card */}
                    <div className="card white">
                        <div className="card-content ">
                            <span className="card-title">
                                Current Story
                                <span className="right">
                                    <Loader type="Watch" color="black" height={35} width={35} visible={activeRound}/>
                                </span>                                
                            </span>
                            <div className="input-field">
                                <textarea 
                                type="text" 
                                id="currentStory" 
                                value={currentStory} 
                                onChange={this.handleChange} 
                                readOnly={ activeRound } 
                                placeholder="Enter Story..."
                                className="materialize-textarea"/>
                                </div>
                        </div>
                        <div className="card-action">
                            { 
                                activeRound ? 
                                <a className="pink lighten-1 z-depth-0 btn" onClick={()=>this.toggleRound(false)}>End</a>
                                : 
                                <a className="pink lighten-1 z-depth-0 btn" onClick={()=>this.toggleRound(true)}>Start</a>
                            }
                        </div>
                    </div>

                    {/* Choose Vote Card */}
                    {
                        activeRound
                        ? 
                        <div className="card white">
                            <div className="card-content ">
                                <span className="card-title center-align">Choose Vote</span>
                                <div className="row center-align mt-20">
                                    { showVotingCards }
                                </div>                                  
                            </div>
                        </div> 
                        : ''
                    }

                    {
                        !activeRound && stories && stories.length>0 
                        ? 
                        <div className="collection with-header user-story-list">
                            <div className="collection-header"><h4>User Stories</h4></div>
                            { showUserStories }
                        </div>
                        :
                        ''
                    }

                </div>
                <div className="col s12 m6 l6">
                    
                    {/* Round Results Card */}
                    <div className="card white round-results-card">
                        <div className="card-content ">
                            <div className="card-title">
                                Round Results
                                { showRoundResult }
                            </div>
                            <div className="row">
                                {room && room[0].users.map(user => {
                                    let userVoteObj = room[0].currentVotes.find(obj => {
                                        return obj.userId === user.id
                                    });

                                    let fileName = userVoteObj && userVoteObj.vote && !activeRound ? '/img/'+userVoteObj.vote+'.png' : '/img/card-flipped.jpg';

                                    return (

                                        <div key={user.id} className="col s3 l3 m3 mt-20">

                                        {
                                        userVoteObj && userVoteObj.vote && !activeRound ? 

                                        <img className="mr-20" width="65%" height="65%" src={fileName} alt=""></img>
                                        
                                        : 
                                        
                                        <img className="mr-20 card-border" width="65%" height="65%" src={fileName} alt=''></img> 
                                        }

                                            <p>
                                                { user.name }
                                                {
                                                    userVoteObj && userVoteObj.vote && activeRound ?
                                                        <i  className="material-icons tiny green white-text ml-10" >done</i>
                                                    : ''
                                                }
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Round History Card */}
                    <div className="card white round-history-card">
                        <div className="card-content">
                            <span className="card-title">
                                Round History 
                                <i title="Download Results" className="material-icons right cursor-pointer" onClick={this.printDocument}>cloud_download</i>
                            </span>
                            
                            <table className="striped" id="roundHistoryTable">
                                <thead>
                                    <tr>
                                        <th>Story Name</th>
                                        <th>Average Score</th>
                                        <th>Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    roundsHistory && roundsHistory.map(round => {
                                        return (
                                            <tr key={ round.storyId }>
                                                <td>{ round.storyName }</td>
                                                <td>{ round.score }</td>
                                                <td>{ round.duration }</td>
                                            </tr>
                                        )
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <Launcher
                agentProfile={{
                teamName: 'Planning Poker Chat',
                imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
                }}
                onMessageWasSent={this._onMessageWasSent.bind(this)}
                messageList={messageList}
                showEmoji
            />
        </div>
        }
        else{
            renderContainer = ''
            {/* <div className="container center-align mt-60">
                <Loader type="Oval" color="black" height={60} width={60} visible="true"/>
                <h4>Getting your party started...</h4>
            </div> */}
        }
        return (
        renderContainer //Render the dom elements, or, when this.state === false, nothing.
        )

	}
}

const mapStateToProps = (state) => {
	return {
        room: state.firestore.ordered.rooms,

        currentStory: state.firestore.ordered.rooms ? state.firestore.ordered.rooms[0].currentStory : "",

        messageList: state.firestore.ordered.rooms ? state.firestore.ordered.rooms[0].messageList : [],

        stories: state.firestore.ordered.rooms ? 
        state.firestore.ordered.rooms[0].stories : [],

        currentScore: state.firestore.ordered.rooms ? state.firestore.ordered.rooms[0].currentScore : "",

        activeRound: state.firestore.ordered.rooms ? state.firestore.ordered.rooms[0].activeRound : false,

        roundsHistory: state.firestore.ordered.rooms ? state.firestore.ordered.rooms[0].roundsHistory : [],

        user: state.user,
        localRoom:state.room,
        leaveRoom: state.room.leaveRoom,

        roomTest: state.firestore.ordered.rooms ? state.firestore.ordered.rooms[0] : null,

        userList: state.firestore.ordered.rooms ? state.firestore.ordered.rooms[0].users : [] 

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