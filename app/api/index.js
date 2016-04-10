/**
 * Mocking client-server processing
 */

import _categories from './categories.json'
import _links from './links.json'

const TIMEOUT = 100

export default {
  getCategories(callback) {
    setTimeout(() => callback(_categories), TIMEOUT)
  },

  getCategoryLinks(categoryId, callback) {
    let links = _links.filter(link => link.category_id == categoryId)
    setTimeout(() => callback(links), TIMEOUT)
  },

  getLinks(callback) {
    setTimeout(() => callback(_links), TIMEOUT)
  },

  getLink(linkId, callback) {
    let link = _links.find(link => link.id == linkId)
    setTimeout(() => callback(link), TIMEOUT)
  }
}
