import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {compose, createStore} from 'redux';
import {Provider} from 'react-redux';
import UserReducer from './reducers/UserReducer';

const store = createStore(UserReducer, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

ReactDOM.render(
    <Provider store = {store}>
        <App />,
    </Provider>, 
    document.getElementById('root')
);
