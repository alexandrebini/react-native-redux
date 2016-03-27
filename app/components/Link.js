import React, {Component, PropTypes, View, Image, Text, TouchableHighlight} from 'react-native'
import styles from '../styles/Link';

class Link extends Component {
  render() {
    const {link, onPress} = this.props;

    return (
      <TouchableHighlight onPress={() => { onPress(link) }}>
        <View style={styles.container}>
          <Image
            source={{uri: link.cover_url}}
            style={styles.thumbnail} />
          <View style={styles.content}>
            <Text style={styles.title}>{link.title}</Text>
            <Text style={styles.description}>{link.description}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

Link.propTypes = {
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    coverUrl: PropTypes.string.isOptional,
    description: PropTypes.string.isOptional,
  }).isRequired,
  onPress: PropTypes.func.isRequired
}

export default Link
