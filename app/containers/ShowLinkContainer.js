import React, {Component, PropTypes, Text, View} from 'react-native'
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux'
import {getLink} from '../actions/LinkActions'
import ShowLink from '../components/ShowLink'

class ShowLinkContainer extends Component {
  componentDidMount() {
    const {link_id, dispatch} = this.props
    dispatch(getLink(link_id))
  }

  componentWillUpdate(nextProps, nextState) {
    const {link} = nextProps
    // Actions.refresh({ title: link.title })
  }

  render() {
    const {link} = this.props;

    // console.log('render show link container', this.props)
    return (
      <View>
        <Text>AAAAAAAAAAAAAAAAAAA</Text>
        <Text>AAAAAAAAAAAAAAAAAAA</Text>
        <Text>AAAAAAAAAAAAAAAAAAA</Text>
        <Text>AAAAAAAAAAAAAAAAAAA</Text>
        <Text>AAAAAAAAAAAAAAAAAAA</Text>
        <Text>AAAAAAAAAAAAAAAAAAA</Text>
        <Text>{link.title}</Text>
        <ShowLink link={link} />
      </View>
    )
  }
}

ShowLinkContainer.propTypes = {
  link_id: PropTypes.number.isRequired
}

export default connect(state => state.Link)(ShowLinkContainer)
