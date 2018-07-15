import React from 'react';
import {Route, Router} from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Auth from './Auth/Auth';
import history from './History';

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
                <Route path="/" render={
                    props => <App auth={auth} history={props.history}/>
                }/>
                <Route path="/home" render={
                    () => <Home auth={auth}/>
                }/>
                <Route path="/callback" render={
                    props => {
                        handleAuthentication(props);
                        return <p>loading</p>
                    }
                }/>
            </div>
        </Router>
    );
}