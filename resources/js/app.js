import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import Routes from "./routes";
import { Provider } from 'react-redux'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(
            thunk,
            promise,
        )
    )
)

render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById('index')
)