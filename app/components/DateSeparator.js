import React, {Component, PropTypes, View, Text} from 'react-native'
import styles from '../styles/DateSeparator'

class DateSeparator extends Component {
  render() {
    const {date, length} = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.badge}>{length}</Text>
      </View>
    )
  }
}

DateSeparator.propTypes = {
  // date: PropTypes.isRequired,
  length: PropTypes.number.isRequired
}

export default DateSeparator
