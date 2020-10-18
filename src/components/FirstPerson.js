import React, {useEffect} from "react";
import chatStore, { subject, initialState } from '../store/chat';
import useObservable from "../utils/useObservable";


const FirstPerson = () => {
	const chatState = useObservable(subject, initialState)
	useEffect(() => {
		chatStore.init()
	},[])
	
	const onFormSubmit = e => {
		e.preventDefault();
		const messageObject = {
			person: 'first-person',
			text: e.target.elements.messageInput.value.trim(),
		};
		chatStore.sendMessage(messageObject);
		document.getElementById('messageForm').reset();
	};

	return (
		<div className="container">
			<h2>Chat First Person</h2>
			<div className="chat-box">
				{chatState && chatState.data.map(message => (
					<div key={Math.random()}>
						<p className={message.person}>{message.text}</p>
						<div className="clear"></div>
					</div>
				))}
			</div>
			<form id="messageForm" onSubmit={onFormSubmit}>
				<input
					type="text"
					id="messageInput"
					name="messageInput"
					placeholder="type here..."
					required
				/>
				<button type="submit">Send</button> <br />
			</form>
			<button className="clear-button" onClick={() => chatStore.clearChat()}>
				Clear Chat
			</button>
		</div>
	);
}

export  default  FirstPerson;
