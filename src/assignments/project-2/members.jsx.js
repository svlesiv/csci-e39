import React from 'react'
import PropTypes from 'prop-types'

class Members extends React.Component {
  render() {
    const classroom = this.props.classroom
    return <section>
      <h2>Members</h2>
      <ul>
        {classroom.students.map(({id, name}) =>
          <li key={id}><span>{name}</span></li>
        )}
      </ul>
    </section>
  };
}

export default Members
