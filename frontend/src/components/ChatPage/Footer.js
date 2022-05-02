import React, {useEffect} from 'react';
import socket from '../../socket'; 
import { connect } from 'react-redux';

const Footer = ({ messages, login, setMessages, chatId }) => {

    const enterMessage = (e) => {
        const currentTime = getGurrentTime();

        const messageObj = {
            'time': currentTime,
            'text': e.target.value,
            'user': login
        }

        const newMessages = [...messages, messageObj];

        if (e.key === 'Enter') {
            setMessages(newMessages);
            e.target.value = '';

            socket.emit('ROOM:ENTER_MESSAGE', {
                newMessages,
                myChatId: chatId
            });
        }
    }

    const getGurrentTime = () => {
        const date = new Date();
        return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true});
    }

    useEffect(() => {
        socket.on('ROOM:ENTER_MESSAGE', (newMessages, myChatId) => {
            if(myChatId === chatId) {
                setMessages(newMessages)
            }
        });
    }, [messages]);

    return (
        <div className="footer">
            <input className="input_message" type="text" placeholder="Enter text message..." onKeyPress={(e) => enterMessage(e)} />
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        chatId: state.chatId,
    }
}

export default connect(mapStateToProps)(Footer);