import React from 'react'
import PropTypes from 'prop-types'
import autobind from 'class-autobind'
import Members from './members.jsx'
import Messages from './messages.jsx'
import ChatInput from './chatInput.jsx'
import Ad from './ad.jsx'

//Hello team Burj this is a test comment
// This is also a test commit
//another one

class Chat extends React.Component {

	constructor() {
		super(...arguments)
		autobind(this)
		this.state = {currentText: ``}
	}

	onType(e) {
		const {chat} = this.props.actions
		const {currentText: prevText} = this.state
		const currentText = e.target.value

		if (!currentText.length) chat.stopTyping()
		if (currentText.length === 1 && !prevText.length) chat.startTyping()

		this.setState({currentText})
	}

	onSend(e) {
		if (e.type === `keyup` && e.key !== `Enter`) return

		const {chat} = this.props.actions
		const {currentText} = this.state
		if (!currentText.length) return

		chat.send(currentText)
		this.setState({currentText: ``})
	}

	getTypingMessage() {
		const {typing} = this.props.chat

		switch (typing.length) {
			case 0: return null
			case 1: return `${typing[0].name} is typing...`
			case 2: return `${typing[0].name} and ${typing[1].name} are typing...`
			case 3: return `${typing[0].name}, ${typing[1].name}, and ${typing[2].name} are typing...`
			// len > 3
			default: return `${typing.length} members are typing...`
		}
	}

render() {
		const {classroom, chat, actions} = this.props
		const {currentText} = this.state;

		return(
			<div className="top_wrapper">
				<header className="container main">
					<h1>Chatroom</h1>
				</header>
				<aside className="container member">
					<Members 
				        classroom={classroom}
				      />

				    <Ad siteUrl="http://google.com" image="https://www.fillmurray.com/g/300/300" mobileImage="https://www.fillmurray.com/g/200/200" alt="ad image" text="Click"/>
				    <Ad siteUrl="http://google.com" image="https://www.fillmurray.com/g/300/300" mobileImage="https://www.fillmurray.com/g/200/200" alt="ad image" text="Click"/>
				</aside>
				<main className="container messages">
					<Messages
				        chat={chat}
				      />

					<ChatInput 
				        currentText={currentText}
				        onType={this.onType}
				        onSend={this.onSend}
				        getTypingMessage={this.getTypingMessage}
				      />
				</main>
			</div>)
	}
}

const studentPropType = PropTypes.shape({
	id: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
})

Chat.propTypes = {
	classroom: PropTypes.shape({
		students: PropTypes.arrayOf(studentPropType).isRequired,
	}).isRequired,
	chat: PropTypes.shape({
		typing: PropTypes.arrayOf(studentPropType).isRequired,
		messages: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			text: PropTypes.string.isRequired,
			student: studentPropType,
			createdAt: PropTypes.instanceOf(Date).isRequired,
		})).isRequired,
		send: PropTypes.shape({
			status: PropTypes.oneOf([`init`, `pending`, `success`, `failure`]).isRequired,
			message: PropTypes.string.isRequired,
		}).isRequired
	}),
	actions: PropTypes.object.isRequired,
}

export default Chat
