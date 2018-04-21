import React from 'react'
import PropTypes from 'prop-types'

class chatInput extends React.Component {
  render() {
    const {onType, onSend, currentText, getTypingMessage}=this.props;
    return <section>
      <input 
        value={currentText} 
        onChange={onType} 
        onKeyUp={onSend} 
      />
      <button 
        disabled={currentText === ``} 
        onClick={onSend}>
        Send
      </button>
      <p>{getTypingMessage()}</p>
    </section>
  };
}

export default chatInput