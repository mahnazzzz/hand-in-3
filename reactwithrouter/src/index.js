import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {hashHistory,Router, Route} from 'react-router';
import List from './List.js';
import Details from './Details.js';
import Data from './data/data.json';


ReactDOM.render(

    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <Route path="/list" component={List}  propsdata={Data}/>
            <Route path="/details/:id" component={Details} propsdata={Data}/>
        </Route>
    </Router>
    ,

    document.getElementById('root')
    );
registerServiceWorker();
