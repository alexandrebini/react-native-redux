'use strict';
import * as ActionTypes from '../constants/ActionTypes';

let defaultState = {
  link: {}
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.SHOW_LINK:
      return {...state, link: action.link};
    default:
      return state;
  }
}
