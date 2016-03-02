import createElement from 'fluxible-addons-react/createElementWithContext';
import Fluxible from 'fluxible';
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.jsx';
import GameStore from './stores/gameStore.jsx'
import {RouteStore} from 'fluxible-router';
import routes from './routes';


let container = document.createElement('table-tennis');
let app = new Fluxible({ component: Main });
let props = {};

document.body.appendChild(container);


app.registerStore(GameStore);
app.registerStore(RouteStore.withStaticRoutes(routes));

app.rehydrate({}, function(err, context) {

    if(err)
        throw err;

    window.context = context;

    ReactDOM.render(createElement(context, props), container);

});
