import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './listItem.jsx'

class Messages extends React.Component {
  render() {

    const chat= this.props.chat
    
    return <section class="messages-container">
      <h2>Messages</h2>
      <ul>
        {chat.messages.map(({id, student, text, createdAt}) =>
          <ListItem 
            type='message'
            key={id}
            name={student.name}
            postedAt={createdAt.toISOString()}
            text={text}
          />
        )}
      </ul>
    </section>
  };
}

export default Messages
