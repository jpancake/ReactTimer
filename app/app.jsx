import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import {Main} from 'main';
import Timer from 'timer';
import Countdown from 'countdown';


// load foundation
import 'foundation-sites/dist/css/foundation-flex.min.css'
$(document).foundation();

//App css
import 'applicationStyles';


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="countdown" component={Countdown}/>
            <IndexRoute component={Timer}/>
        </Route>
    </Router>,
    $('#app')[0]
);