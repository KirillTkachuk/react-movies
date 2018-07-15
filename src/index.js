import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'
import {routerReducer} from 'react-router-redux'

import rducer from './reducers'
;
import './index.css';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

const reducer = combineReducers({
    ...rducer,
    routing: routerReducer
})

const store = createStore(rducer);


ReactDOM.render(
    <Provider store={store}>
         <BrowserRouter>
                <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
