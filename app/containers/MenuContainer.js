import React, {Component, PropTypes, View} from 'react-native'
import Drawer from 'react-native-drawer'
import {DefaultRenderer} from 'react-native-router-flux'
import CategoryListContainer from './CategoryListContainer'
import styles from '../styles/MenuContainer'

class Menu extends Component {
  render() {
    const children = this.props.navigationState.children

    return (
      <Drawer
        ref='navigation'
        type='displace'
        content={this.content()}
        tapToClose={true}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        negotiatePan={true}
        initializeOpen={false}
        >
        <DefaultRenderer navigationState={children[0]} />
      </Drawer>
    );
  }

  content() {
    return (
      <View style={styles.container}>
        <CategoryListContainer />
      </View>
    )
  }
}

export default Menu
