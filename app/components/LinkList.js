import React, {Component, PropTypes, ListView} from 'react-native'
import Link from './Link'
import DateSeparator from './DateSeparator'
import styles from '../styles/LinkList';

class LinkList extends Component {
  render() {
    const {dataSource} = this.props;

    return (
      <ListView
        style={styles.container}
        dataSource={dataSource}
        renderRow={this.renderLink.bind(this)}
        renderSectionHeader={this.renderSectionHeader.bind(this)}
        removeClippedSubviews={true}
        pageSize={10}
        />
    )
  }

  renderLink(link) {
    const {onPress} = this.props;
    return (
      <Link key={link.id} link={link} onPress={onPress}/>
    )
  }

  renderSectionHeader(sectionData, sectionID) {
    return (
      <DateSeparator date={sectionID} length={sectionData.length}/>
    )
  }
}

LinkList.propTypes = {
  dataSource: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default LinkList
