import React, { Component } from 'react'

class UserStories extends Component {

    constructor(props) {
        super(props);
    }

    assignStory = (story) => {
        let updateStory = {
            'id':this.props.room.id,
            'currentStory': story
        }
        this.props.updateCurrentStory(updateStory);
    }

    render() {
        let { stories, moderator, user, currentStory, activeRound } = this.props;

        const showUserStories = stories.map((story) => {
            return moderator !== user.id ?
            <div className="collection-item" key={story}>
            {story}
            </div>
            :
            <a 
                onClick={()=>this.assignStory(story)} 
                key={story} href="#!" 
                className={ currentStory && currentStory === story ? "collection-item active": "collection-item"}>
                {story}
            </a>
        })

        return (
            <div>
                {
                    !activeRound && stories && stories.length>0 
                    ? 
                    <div className="collection with-header user-story-list">
                        <div className="collection-header"><h5>User Stories</h5></div>
                        { showUserStories }
                    </div>
                    :
                    ''
                }
            </div>
        )
    }

}

export default UserStories