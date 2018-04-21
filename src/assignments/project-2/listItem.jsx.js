import React from 'react'
import PropTypes from 'prop-types'

class ListItem extends React.Component {
  render() {
    const listData = this.props;

    if(listData.type === 'member') {
      return <li key={listData.key}>Name: <span>{listData.name}</span></li>
    } else if(listData.type === 'message') {
      return <li key={listData.key}>
            <label>{listData.name} at {listData.postedAt}</label>
            <p>{listData.text}</p>
          </li>
    }
  };
}

export default ListItem
