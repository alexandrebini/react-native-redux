import React, {Component} from 'react-native'
import {connect} from 'react-redux';
import LinkListContainer from './LinkListContainer'
import {getCategoryLinks} from '../actions/CategoryActions'

class CategoryLinksContainer extends Component {
  componentDidMount() {
    const {dispatch, category_id} = this.props
    dispatch(getCategoryLinks(category_id))
  }

  render() {
    const {links} = this.props
    return (
      <LinkListContainer links={links}/>
    )
  }
}

export default connect(state => state.CategoryLinks)(CategoryLinksContainer)
