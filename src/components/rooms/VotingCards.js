import React, { Component } from 'react'

class VotingCards extends Component {

    constructor(props) {
        super(props);
    }

    castVote = (vote) =>{
        let currentVote = {
            'roomId':this.props.room.id,
            'userId': this.props.user.id,
            'userName': this.props.user.name,
            'vote': vote
        }
        this.props.castVote(currentVote);
    }

    render() {
        let { room, user, activeRound } = this.props;
        const votes = [1, 2, 3, 5, 8, 13, 20, 40, 100];

        let currentUserVote = room && room.currentVotes.find(obj => {
            return obj.userId === user.id
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

        return (
            <div>
                {
                    activeRound
                    ? 
                    <div className="card white">
                        <div className="card-content ">
                            <span className="card-title ">Choose Vote</span>
                            <div className="row center-align mt-20">
                                { showVotingCards }
                            </div>                                  
                        </div>
                    </div> 
                    : ''
                }
            </div>
        )
    }

}

export default VotingCards