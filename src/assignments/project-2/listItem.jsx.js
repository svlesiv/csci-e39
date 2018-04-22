import React from 'react'
import PropTypes from 'prop-types'

class ListItem extends React.Component {
 render() {
   const listData = this.props;
   let maskData = listData.text ? listData.text : '';

   let isBold = maskData.match(/^\*.*\*$/);

   if(listData.type === 'member') {
     return <li key={listData.key}>Name: <span>{listData.name}</span></li>
   } else if(listData.type === 'message') {
     return <li key={listData.key}>
           <label>{listData.name} at {listData.postedAt}</label>
         {isBold ? (
           <p className="bold-text">{listData.text}</p>
         ) : (
           <p>{listData.text}</p>
         )}
         </li>
   }
 };
}

export default ListItem
