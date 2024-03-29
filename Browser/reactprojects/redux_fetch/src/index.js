import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducers/RootReducer';

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}> <App /></Provider>,
    document.getElementById('root'));

