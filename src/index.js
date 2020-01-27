import 'core-js/stable'
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './store/reducer';
import { loadState, saveState } from './localStorage';
import throttle from 'lodash/throttle';
import App from './App';
import * as serviceWorker from './serviceWorker';

export const ACTION_REMOVE_STUDENT = 'ACTION_REMOVE_STUDENT';
export const ACTION_ADD_STUDENT = 'ACTION_ADD_STUDENT';
export const ACTION_EDIT_STUDENT = 'ACTION_EDIT_STUDENT';
export const ACTION_EDIT_NAME = 'ACTION_EDIT_NAME';
export const ACTION_EDIT_BIRTHDATE = 'ACTION_EDIT_BIRTHDATE';
export const ACTION_EDIT_RATE = 'ACTION_EDIT_RATE';
export const ACTION_EDIT_EDITABLE = 'ACTION_EDIT_EDITABLE';

const persistedState = loadState();
const store = createStore(
    rootReducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(throttle(() => {
    saveState(store.getState());
}, 1000));

// localStorage.clear();

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
