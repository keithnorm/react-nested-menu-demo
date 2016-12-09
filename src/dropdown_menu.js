/**
 *  third-party modules
 */
import React, { Component, PropTypes } from 'react';
import {render} from 'react-dom';

/**
 *  internal modules
 */
import MENU_DATA from './menu.config';

/**
 * The Menu component, used to generate the menu DOM structure
 * @param {array} items an array of menu items conforming to the menuShape (can be infinitely nested)
 */
class Menu extends Component {

  onMenuItemClick(title) {
    alert(title)
  }

  render() {
    const { items } = this.props

    return (
      <ul>
        {items.map((item, i) =>
          <MenuItem key={`item-${i}`} title={item.title} onClick={this.onMenuItemClick}>
            {item.submenu && <Menu items={item.submenu}/>}
          </MenuItem>
        )}
      </ul>
    )
  }
}

/**
 * the schema for menu item data, this will throw a warning if Menu is given data that does not conform
 */
const menuShape = React.PropTypes.shape({
    title: React.PropTypes.string.isRequired,
    submenu: React.PropTypes.arrayOf(function () {
        return menuShape.apply(this, arguments);
    })
})

Menu.propTypes = {
  items: React.PropTypes.arrayOf(menuShape)
}


/**
 * MenuItem defines a single item in the menu, essentially the <li> in the <ul>
 * @param {string} title      the title text for the item, to be displayed in the list
 * @param {function} onClick  a callback function, passes the menu item title to the receiver
 * @param {array} children    this component can contain nested DOM elements
 */
const MenuItem = ({title, onClick, children}) => {
  return <li className="menu-item"><a onClick={() => { onClick(title) }}><span>{title}</span></a> {children}</li>
}

MenuItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
}

render(
  <Menu items={MENU_DATA}/>,
  document.getElementById('menu')
);
