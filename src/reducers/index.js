import { combineReducers } from 'redux';
import { FETCH_REQUEST_QUERY } from '../actions';

const requestReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_REQUEST_QUERY:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  request: requestReducer,
});
