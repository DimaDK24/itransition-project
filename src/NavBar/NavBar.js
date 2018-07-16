import React, {Component} from 'react';
import './NavBar.css';
import 'uikit/dist/css/uikit.min.css'
import 'uikit/dist/js/uikit.min'
import {Link} from "react-router-dom";
import Auth from "../Auth/Auth";

const auth = new Auth();

class NavBar extends Component {
    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        auth.login();
    }

    logout() {
        auth.logout();
    }

    getLoginLink() {
        return (<Link to="/login" onClick={this.login.bind(this)}>Log In</Link>);
    }

    getLogoutLink() {
        return (<Link to="/logout" onClick={this.logout.bind(this)}>Log Out</Link>);
    }

    render() {
        const {isAuthenticated} = auth;
        return (
            <div>
                <nav data-uk-navbar className="uk-navbar-container">
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <li>
                                <Link to="/dashboard" onClick={this.goTo.bind(this, 'dashboard')}>Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li>
                                {!isAuthenticated() && this.getLoginLink()}
                                {isAuthenticated() && this.getLogoutLink()}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default NavBar;