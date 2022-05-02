import AuthPage from './components/AuthPage/AuthPage';
import ChatPage from './components/ChatPage/ChatPage';
import './App.css';
import { connect } from 'react-redux';

const App = ({ isAuth }) => {

    return (
      <div>
        {
          !isAuth 
            ? 
            <AuthPage /> 
            :
            <ChatPage />
        }
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
      isAuth: state.isAuth
  }
}

export default connect(mapStateToProps)(App);