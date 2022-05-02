import React, {useState} from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { connect } from 'react-redux';

const ChatPage = ({ login }) => {

    const [messages, setMessages] = useState([]);

    return (
        <div className="app">
            <Header login={login}  />
            <Main login={login} 
                  messages={messages} />
            <Footer messages={messages} 
                    setMessages={setMessages}
                    login={login} /> 
      </div>
    )

}

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

export default connect(mapStateToProps)(ChatPage);