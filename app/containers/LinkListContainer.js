import React, {Component, ListView, View} from 'react-native'
import LinkList from '../components/LinkList'
import {connect} from 'react-redux';
import styles from '../styles/Link';
import {Actions} from 'react-native-router-flux'

class LinkListContainer extends Component {
  render() {
    const {links} = this.props;

    return (
      <LinkList
        dataSource={this.dataSource(links)}
        onPress={(link) => { this.onPress(link) }}
        />
    )
  }

  dataSource(links) {
    let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    return ds.cloneWithRows(links)
  }

  onPress(link) {
    Actions.showLink({ link_id: link.id })
  }
}

export default connect(state => state.Links)(LinkListContainer)