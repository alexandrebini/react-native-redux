import React, {Component, PropTypes, WebView} from 'react-native'

class ShowLink extends Component {
  render() {
    const {link} = this.props;
    console.log('--------------render',link)

    return (
      <WebView
          automaticallyAdjustContentInsets={false}
          startInLoadingState={true}
          source={{uri: link.url}}
          style={{flex: 1, height: 500}}
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
