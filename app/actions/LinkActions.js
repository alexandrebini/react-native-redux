import api from '../api/index'
import {RECEIVE_LINKS} from '../constants/ActionTypes';
import {SHOW_LINK} from '../constants/ActionTypes';

export function receiveLinks(links) {
  return {
    type: RECEIVE_LINKS,
    links: links
  }
}

export function showLink(link) {
  return {
    type: SHOW_LINK,
    link: link
  }
}

export function getLinks() {
  return dispatch => {
    api.getLinks(links => {
      dispatch(receiveLinks(links))
    })
  }
}

export function getLink(linkId) {
  return dispatch => {
    api.getLink(linkId, link => {
      dispatch(showLink(link))
    })
  }
}
