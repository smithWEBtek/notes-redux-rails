import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers'
import registerServiceWorker from './registerServiceWorker';
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Creates store and allows for use of thunk middleware for async actions.

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

// Renders App and allows for access to store throughout via provider and passing
// of store.

ReactDOM.render(
  <Provider store={store}>
  <App store={store}/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
