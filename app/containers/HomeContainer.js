import React, {Component} from 'react-native'
import {connect} from 'react-redux';
import LinkListContainer from './LinkListContainer'
import {getLinks} from '../actions/LinkActions'

class HomeContainer extends Component {
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(getLinks())
  }

  render() {
    const {links} = this.props
    return (
      <LinkListContainer links={links}/>
    )
  }
}

export default connect(state => state.Links)(HomeContainer)
