// src/App.js

import React, {Component} from 'react';
import './App.css';

class App extends Component {
    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    getLoginButton() {
        return (<button onClick={this.login.bind(this)}>Log In</button>);
    }

    getLogoutButton() {
        return (<button onClick={this.logout.bind(this)}>Log Out</button>);
    }

    render() {
        const {isAuthenticated} = this.props.auth;
        return (
            <div>
                <button onClick={this.goTo.bind(this, 'home')}>Home</button>
                {
                    !isAuthenticated() && this.getLoginButton()
                }
                {
                    isAuthenticated() && this.getLogoutButton()
                }
            </div>
        );
    }
}

export default App;