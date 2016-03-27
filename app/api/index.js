/**
 * Mocking client-server processing
 */
import _links from './links.json'

const TIMEOUT = 100

export default {
  getLinks(callback) {
    setTimeout(() => callback(_links), TIMEOUT)
  },

  getLink(linkId, callback) {
    let link = _links.find(link => link.id == linkId)
    setTimeout(() => callback(link), TIMEOUT)
  }
}
