import React, {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
  },
  thumbnail: {
    alignSelf: 'flex-start',
    flex: 0.25,
    height: 60,
    marginRight: 10
  },
  content: {
    alignSelf: 'flex-end',
    flex: 0.75
  },
  title: {
    color: '#191E25',
    fontSize: 20,
    marginBottom: 8,
    flex: 1,
  },
  description: {
    color: '#656565',
    flex: 1,
  }
});
