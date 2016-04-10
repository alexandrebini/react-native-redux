import React, {Component, PropTypes, Text, TouchableHighlight, View} from 'react-native'
import styles from '../styles/Category'

class Category extends Component {
  render() {
    const {category, onPress} = this.props;

    return (
      <TouchableHighlight onPress={() => { onPress(category) }}>
        <View style={styles.container}>
          <Text style={styles.name}>{category.name}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

Category.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  onPress: PropTypes.func.isRequired
}

export default Category
