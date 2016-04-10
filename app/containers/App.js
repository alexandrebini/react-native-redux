'use strict';

import React, {Component, Navigator, View, Text, TouchableOpacity} from 'react-native'
import {Provider} from 'react-redux'
import configureStore from '../store/configureStore'
import styles from '../styles/App'
import HomeContainer from './HomeContainer'
import CategoryLinksContainer from './CategoryLinksContainer'
import ShowLinkContainer from './ShowLinkContainer'
import MenuContainer from './MenuContainer'
import {Actions, Scene, Router, Reducer} from 'react-native-router-flux'

const store = configureStore()

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router>
            <Scene key='root'>
              <Scene key='drawer' component={MenuContainer} title={'Paperbot'}>
                <Scene key='home' component={HomeContainer} />
              </Scene>
              <Scene key='categoryLinks' component={CategoryLinksContainer} />
              <Scene key='showLink' component={ShowLinkContainer} />
            </Scene>
          </Router>
        </View>
      </Provider>
    )
  }
}
