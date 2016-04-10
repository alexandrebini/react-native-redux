'use strict';
import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
  categories: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_CATEGORIES:
      return {...state, categories: action.categories};
    default:
      return state;
  }
}
