import { AnyAction, createStore } from 'redux';
import { LOAD_USER, LOAD_USERS } from './actions';

const initialState: State = {
  users: [],
  user: null,
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case LOAD_USERS:
      return {
        ...state,
        users: action.payload,
      };

    case LOAD_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export const store = createStore(reducer);
