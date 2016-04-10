import React, {Component, PropTypes, WebView} from 'react-native'
import styles from '../styles/ShowLink';

class ShowLink extends Component {
  render() {
    const {link} = this.props;

    return (
      <WebView
        automaticallyAdjustContentInsets={true}
        startInLoadingState={true}
        source={{uri: link.url}}
        style={styles.container}
        />
    )
  }
}

ShowLink.propTypes = {
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired
}

export default ShowLink
