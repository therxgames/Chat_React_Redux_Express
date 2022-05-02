import {useEffect} from 'react';
import socket from '../../socket'; 
import { connect } from 'react-redux';

const Auth = ( {setChatId, setLogin, setIsAuth, chatId, login, isAuth } ) => {
    const onSubmit = (e) => {
        e.preventDefault();        
        setIsAuth();

        socket.emit('ROOM:LOGIN', chatId);
    }

    useEffect(() => {
        socket.on('ROOM:JOINED', (chatId) => {
          console.log('Пользователь вошел в чат');
        });

        socket.on('broadcast',function(data) {
            console.log(data.description)
         });

    }, [isAuth]);

    return (
        <div className="auth_container">
            <div className="auth_modal_container container">
                <div className="auth_modal row">
                    <div className="col col-xl-10">
                        <div className="auth_modal_card">
                            <div className="row g-0">

                                <div className="col-md-6 col-lg-5 d-md-block">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp" alt="login form" className="img-fluid"/>
                                </div>

                                <form action="#" method="post" onSubmit = {(e) => onSubmit(e)} className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <h5 className="fw-normal mb-3 pb-3">
                                            Войти в чат
                                        </h5>

                                        <div className="form-outline mb-4">
                                            <input type="number" name="chatID" value={chatId} placeholder="ID Чата" required
                                                onChange={(e) => setChatId(e)} className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" name="login" value={login}  placeholder="Логин" required
                                                onChange={(e) => setLogin(e)} className="form-control form-control-lg" />
                                        </div>

                                        <div className="pt-1 mb-4">
                                            <button className="btn btn-dark btn-lg btn-block" type="submit">
                                                Войти
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuth,
        login: state.login,
        chatId: state.chatId,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setIsAuth: () => dispatch({
            type: 'IS_AUTH', 
            payload: true
        }),

        setLogin: (e) => dispatch({
            type: 'SET_LOGIN', 
            payload: e.target.value
        }),

        setChatId: (e) => dispatch({
            type: 'SET_CHAT_ID', 
            payload: e.target.value
        }),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth);