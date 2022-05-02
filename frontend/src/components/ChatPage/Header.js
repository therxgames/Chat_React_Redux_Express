import React from 'react';
import avatar from '../../img/avatar.png';
import { connect } from 'react-redux';

const Header = ({ login }) => {
    return (
        <div className="header">
            <img src={avatar} width="45" height="45" />
            <div className="name_container">
                <p className="name">{login}</p>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}
  
export default connect(mapStateToProps)(Header);