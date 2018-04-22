import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './listItem.jsx'

class Members extends React.Component {
  render() {
    const classroom = this.props.classroom
    return <div>
      <h2>Members</h2>
      <ul>
        {classroom.students.map(({id, name}) =>
          <ListItem 
            type='member'
            key={id}
            name={name}
          />
        )}
      </ul>
    </div>
  };
}

export default Members
