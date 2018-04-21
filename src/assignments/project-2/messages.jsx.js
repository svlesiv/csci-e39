import React from 'react'
import PropTypes from 'prop-types'

class Messages extends React.Component {
  render() {
    const chat= this.props.chat
    return <section>
      <h2>Messages</h2>
      <ul>
        {chat.messages.map(({id, student, text, createdAt}) =>
          <li key={id}>
            <label>{student.name} at {createdAt.toISOString()}</label>
            <p>{text}</p>
          </li>
        )}
      </ul>
    </section>
  };
}

export default Messages
