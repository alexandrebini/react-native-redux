'use strict';
import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
  links: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.RECEIVE_LINKS:
      return {...state, links: action.links};
    default:
      return state;
  }
}
