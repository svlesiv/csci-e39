import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './listItem.jsx'

class Messages extends React.Component {
  render() {

    const chat= this.props.chat
    
    return <section class="messages-container">
      <h2>Messages</h2>
      <ul>
        {chat.messages.map(function(message) {
          let hours = message.createdAt.getHours()
          let minutes = message.createdAt.getMinutes()
          minutes = (minutes < 10 ? "0" : "") + minutes;
          let month = message.createdAt.getMonth()+1
          let date = message.createdAt.getDate()
          let year = message.createdAt.getFullYear()
          return <ListItem
            type='message'
            key={message.id}
            name={message.student.name}
            postedAt={`${hours}:${minutes} on ${month}/${date}/${year}`}
            text={message.text}
          />
        })}
      </ul>
    </section>
  };
}

export default Messages
