import React from 'react';
import avatar from '../../img/avatar.png';

const Message = ({user, text, time}) => {

    return (
        <div className="message">
            <div className="message_img">
                <img src={avatar} width="45" height="45" />
            </div>

            <div className="message_content">
                <p className="message_name">{user}</p>
                <p className="message_text">{text}</p>
                <p className="message_time">{time}</p>
            </div>
        </div>
    )
}

export default Message;