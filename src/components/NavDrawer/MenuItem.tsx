import MultiLevel from './MultiLevel'
import SingleLevel from './SingleLevel'

const MenuItem = ({ item }) => {
  const hasChildren = (item) => {
    const { items: children } = item;
    if (children === undefined || children.constructor !== Array || children.length === 0) {
        return false;
    }
    return true;
  }

  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item}/>;
};

export default MenuItem;
