import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import movieApp from './reducers'

import './index.css'
import App from './components/App'

import registerServiceWorker from './registerServiceWorker'

const store = createStore(movieApp);

ReactDOM.render(
    <Provider store={store}>
         <BrowserRouter>
                <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
