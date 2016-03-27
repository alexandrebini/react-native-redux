'use strict';

import React, {Component, Navigator, View, Text} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import styles from '../styles/App';
import LinkListContainer from './LinkListContainer';
import ShowLinkContainer from './ShowLinkContainer';
import {getLinks} from '../actions/LinkActions'
import {Actions, Scene, Router, Reducer} from 'react-native-router-flux';

const store = configureStore();
store.dispatch(getLinks())

const reducerCreate = params=>{
    const defaultReducer = Reducer(params);
    return (state, action)=>{
        console.log("ACTION:", action);
        return defaultReducer(state, action);
    }
};

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Router createReducer={reducerCreate} >
            <Scene key="root">
              <Scene key="login" component={LinkListContainer} hideNavBar={true}/>
              <Scene key="showLink" component={ShowLinkContainer} />
            </Scene>
          </Router>
        </View>
      </Provider>
    );
  }
}
