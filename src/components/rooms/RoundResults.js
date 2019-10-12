import React, { Component } from 'react'

class RoundResults extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {room, currentScore, activeRound } = this.props;

        const showRoundResult = currentScore 
        ? 
        <span className="right">{ currentScore } points</span>
        : 
        '';
        
        return (
            <div className="card white round-results-card">
                <div className="card-content ">
                    <div className="card-title">
                        Round Results
                        { showRoundResult }
                    </div>
                    <div className="row">
                        {room && room.users.map(user => {
                            let userVoteObj = room.currentVotes.find(obj => {
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
        )
    }

}

export default RoundResults