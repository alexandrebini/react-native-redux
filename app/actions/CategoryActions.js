import api from '../api/index'
import {RECEIVE_CATEGORIES, RECEIVE_CATEGORY_LINKS} from '../constants/ActionTypes';

export function receiveCategories(categories) {
  return {
    type: RECEIVE_CATEGORIES,
    categories: categories
  }
}

export function receiveCategoryLinks(links) {
  return {
    type: RECEIVE_CATEGORY_LINKS,
    links: links
  }
}

export function getCategories() {
  return dispatch => {
    api.getCategories(categories => {
      dispatch(receiveCategories(categories))
    })
  }
}

export function getCategoryLinks(categoryId) {
  return dispatch => {
    api.getCategoryLinks(categoryId, links => {
      dispatch(receiveCategoryLinks(links))
    })
  }
}
