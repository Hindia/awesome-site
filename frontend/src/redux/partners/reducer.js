import * as ActionTypes from './actionTypes';

const initialState = {
	data: [],
	isLoading: false,
	Error: false,
	lastUpdate: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_PARTNERS_STARTED:
      return {
        ...state,
        isLoading: true
      };
    case ActionTypes.UPDATE_PARTNERS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        lastUpdate: Date.now()
      };
    case ActionTypes.UPDATE_PARTNERS_FAILED:
      return {
        ...state,
        Error: action.error
      };
    default:
      return state;
  }
}