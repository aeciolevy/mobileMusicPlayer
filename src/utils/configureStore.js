import { createStore, applyMiddleware, compose } from 'redux';
import { middleware as flashMiddleware } from 'redux-flash';
import appReducers from '../reducers';

const thunk = store => next => action =>
    typeof action === 'function' ?
        action(store.dispatch, store.getState) : // Let it dispatch as many as it wants
        next(action);

const configureStore = () => {
    const middlewares = [];
    
    // Call them as the actions propagate through them
    middlewares.push(thunk);
    // reducer to show flash messages
    middlewares.push(flashMiddleware());
    
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle

    const store = createStore(
        appReducers,
        process.env.NODE_ENV === 'production' ? applyMiddleware(...middlewares) : composeEnhancers(applyMiddleware(...middlewares)),
    );

    return store;
};

export default configureStore;
