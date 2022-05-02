import React, {useRef, useEffect} from 'react';
import Message from './Message';

const Main = ({ login, messages }) => {
    const inputEl = useRef(null);

    useEffect(() => {
        inputEl.current.scrollTop = inputEl.current.scrollHeight;
    }, [messages]);

    return (
        <div className="main" ref={inputEl}>
            <div className="name">
                {
                    messages.map((item, index) => {
                        let className = login === item.user ? '' : 'friend_message';

                        return (
                            <div key={index} className={`messages_container ${className}`}>
                                <Message login={login} 
                                         text={item.text} 
                                         time={item.time} 
                                         user={item.user} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Main;