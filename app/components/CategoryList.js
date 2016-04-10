import React, {Component, PropTypes, ListView} from 'react-native'
import Category from './Category'

class CategoryList extends Component {
  render() {
    const {dataSource} = this.props;

    return (
      <ListView
        dataSource={dataSource}
        renderRow={this.renderCategory.bind(this)}
        removeClippedSubviews={true}
        pageSize={10}
        />
    )
  }

  renderCategory(category) {
    const {onPress} = this.props;
    return (
      <Category key={category.id} category={category} onPress={onPress}/>
    )
  }
}

CategoryList.propTypes = {
  dataSource: PropTypes.object.isRequired,
  onPress: PropTypes.func.isRequired,
}

export default CategoryList
