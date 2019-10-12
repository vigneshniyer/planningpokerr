import React, { Component } from 'react';
import {Launcher} from 'react-chat-window';

class ChatWindow extends Component {

    constructor(props) {
        super(props);
    }

    _onMessageWasSent(message) {
        if(message.type === 'text'){
            message.data.text= this.props.user.name + ' >> ' + message.data.text;
        }
        else if(message.type === 'emoji') {
            message.type = "text"
            message.data.text = this.props.user.name + ' >> ' + message.data.emoji
        }
        this.props.sendMessage({
            author: 'them',
            type: message.type,
            data: message.data
        })
    }

    render() {
        const {messageList } = this.props;
        return(
            <Launcher
                agentProfile={{
                teamName: 'Chat',
                imageUrl: '/img/chat-icon.ico'
                }}
                onMessageWasSent={this._onMessageWasSent.bind(this)}
                messageList={messageList}
                showEmoji
            />
        )
    }
}

export default ChatWindow;