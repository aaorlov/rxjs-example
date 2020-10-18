import React from 'react';
import { Link } from 'react-router-dom';
import { subject, initialState } from '../store/chat';
import useObservable from "../utils/useObservable";

const PersonSwitcher = () => {
	const location = window.location.href.split('/')[3];

	const chatState = useObservable(subject, initialState)

	const messageNotification = chatState && chatState.newDataCount > 0
		&& (<span className="notify">{chatState.newDataCount}</span>);

	return (
		<div className="switcher-div">
			<Link to="/first-person"><button className="switcher">
				Person1
				{location !== 'first-person' && location.length > 1 && messageNotification}
			</button></Link>
			<Link to="/second-person"><button className="switcher">
				Person2
				{location !== 'second-person' && messageNotification}
			</button></Link>
		</div>
	);
}

export default PersonSwitcher;
