import React, {Component, ListView} from 'react-native'
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux'
import CategoryList from '../components/CategoryList'
import {getCategories} from '../actions/CategoryActions'

class CategoryListContainer extends Component {
  componentDidMount() {
    const {dispatch} = this.props
    dispatch(getCategories())
  }

  render() {
    const {categories} = this.props
    return (
      <CategoryList
        dataSource={this.dataSource(categories)}
        onPress={this.onPress.bind(this)}
        />
    )
  }

  dataSource(categories) {
    let ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    })
    return ds.cloneWithRows(categories)
  }


  onPress(category) {
    console.log('onPress', Actions.categoryLinks)
    Actions.categoryLinks({ category_id: category.id, title: category.name })
  }
}

export default connect(state => state.Categories)(CategoryListContainer)
