import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

export default preloadedState => createStore(reducers, preloadedState, applyMiddleware(thunk));
