import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import { startGetSpots } from './actions/spots'
import { startGetFreeDates } from './actions/filters'
import { login, logout } from './actions/auth'
import { auth } from './firebase/firebase'
import 'normalize.css/normalize.css';
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import spots from './reducers/spots';


const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

let hasRendered = false
const renderApp = () => {
    if (!hasRendered) {
        hasRendered = true
        ReactDOM.render(jsx, document.getElementById('app'));
    }
}

// ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

auth.onAuthStateChanged(user => {
    if (user) {
        console.log('funk');
        store.dispatch(startGetSpots()).then(() => {
            store.dispatch(startGetFreeDates()).then(() => {
                store.dispatch(login(user.uid, user.displayName,!!store.getState().spots.find((spot) => spot.ownerid === user.uid)))  //Login with ID, name, hasspot?
                renderApp()
                if (history.location.pathname === '/') {
                    history.push('u1')
                }
            }
            )
        })
    }
    else {
        //store.dispatch(startGetFreeDates())
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})