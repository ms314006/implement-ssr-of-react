import { FETCH_REQUEST_QUERY } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_REQUEST_QUERY:
      return action.payload;

    default:
      return state;
  }
};
