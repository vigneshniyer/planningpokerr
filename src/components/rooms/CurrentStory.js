import React, { Component } from 'react';
import uuid from "uuid";
import Loader from 'react-loader-spinner';

class CurrentStory extends Component {

    constructor(props) {
        super(props);
    }

    handleChange = (e) => {
        e.preventDefault();
        let updateStory = {
            'id':this.props.room.id,
            'currentStory': e.target.value
        }
        this.props.updateCurrentStory(updateStory);
    }

    toggleRound = (toggle) => {
        if(toggle && !this.props.currentStory) {
            this.setState({ showAlert: true })
        }
        else {
            let toggleRound = {
                'id':this.props.room.id,
                'activeRound': toggle,
                'currentStoryId': toggle ? uuid.v4() : null
            }
            this.props.toggleRound(toggleRound);
        }
    }

    render() {
        let { activeRound, currentStory, moderator, user} = this.props;

        return (
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
                        readOnly={ activeRound || moderator !== user.id } 
                        placeholder={
                            moderator !== user.id ? "Wait for moderator to enter story.." :
                            "Enter Story..."
                        }
                        className="materialize-textarea"/>
                        </div>
                </div>
                {
                    user && moderator === user.id ?
                    <div className="card-action">
                        { 
                            activeRound ? 
                            <a className="blue  z-depth-0 btn" onClick={()=>this.toggleRound(false)}>End</a>
                            : 
                            <a className="blue z-depth-0 btn" onClick={()=>this.toggleRound(true)}>Start</a>
                        }
                    </div>
                    : ''
                }
            </div>
        )
    }
}

export default CurrentStory