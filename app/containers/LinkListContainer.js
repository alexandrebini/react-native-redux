import React, {Component, ListView, View} from 'react-native'
import LinkList from '../components/LinkList'
import {connect} from 'react-redux';
import styles from '../styles/Link';
import {Actions} from 'react-native-router-flux'
import {getLinks} from '../actions/LinkActions'

class LinkListContainer extends Component {
  render() {
    const {links} = this.props
    return (
      <LinkList
        dataSource={this.dataSource(links)}
        onPress={this.onPress.bind(this)}
        />
    )
  }

  dataSource(links) {
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (r1, r2) => r1 !== r2
    })
    let {rows, sections} = this.rowsAndSections(links)
    return ds.cloneWithRowsAndSections(rows, sections)
  }

  rowsAndSections(links) {
    let rows = {}
    let sections = []

    links.map((link) => {
      let section = new Date(Date.parse(link.created_at)).toDateString()
      if (sections.indexOf(section) === -1) {
        sections.push(section)
        rows[section] = []
      }
      rows[section].push(link)
    });

    return {rows, sections}
  }

  onPress(link) {
    Actions.showLink({ link_id: link.id, title: link.title })
  }
}

// export default connect(state => state.Links)(LinkListContainer)
export default LinkListContainer
