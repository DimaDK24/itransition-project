import React from 'react';
import {Route, Router} from 'react-router-dom';
import Home from './Home/Home';
import Auth from './Auth/Auth';
import history from './History';
import './routes.css';
import NavBar from "./NavBar/NavBar";
import Redirect from "react-router-dom/es/Redirect";

const auth = new Auth();

const handleAuthentication = ({location}) => {
    if (/access_token|id_token|error/.test(location.hash)) {
        auth.handleAuthentication();
    }
};

export default function makeMainRoutes() {
    return (
        <Router history={history}>
            <div>
                <NavBar history={history}/>
                <div className="app">
                    <Route exact path="/" render={
                        () => (<Redirect to="/dashboard"/>)
                    }/>
                    <Route path="/dashboard" render={
                        () => <Home auth={auth}/>
                    }/>
                    <Route path="/callback" render={
                        props => {
                            handleAuthentication(props);
                            return <p>loading</p>
                        }
                    }/></div>
            </div>
        </Router>
    );
}