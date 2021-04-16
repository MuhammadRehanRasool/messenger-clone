import './../css/ChatBox.css';
import Message from './Message';
import {useState, useEffect} from 'react';
import Modal from '@material-ui/core/Modal';
import SendIcon from '@material-ui/icons/Send';
import db from "./../js/firebase.js";
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

function ChatBox() {

	const [isNameSaved, setIsNameSaved] = new useState(false);
	useEffect(() => {
		if(isNameSaved){
			db.collection('messages')
			.orderBy('timestamp','asc')
			.onSnapshot((snapshot) => {
				setMessages(snapshot.docs.map(doc => ({id:doc.id, data:doc.data()})));
			});
		}
	},[isNameSaved]);
	let init__newMessage = {
		by:"",
		message:""
	};
	const [user, setUser] = new useState("");
	const [newMessage, setNewMessage] = new useState(init__newMessage);
	const [messages, setMessages] = new useState([]);
	const changeAllMessages = () => {
		db.collection('messages').add({
			by:newMessage.by,
			message:newMessage.message,
			timestamp:firebase.firestore.FieldValue.serverTimestamp()
		});
		setNewMessage(init__newMessage);
	}
	const OnEnter = (event) => {
		if(event.key === 'Enter'){
	    	changeAllMessages();
	  	}
	}
	const changeNewMessage = (e) => {
		setNewMessage({
			by:user,
			message:e.target.value
		});
	}
	useEffect(() => {
		let messageBox = document.querySelector(".messageBox");
		messageBox.scrollTop = messageBox.scrollHeight;
	},[messages]);
	const onModalEnter = (event) => {
		if(event.key === 'Enter'){
	    	submitName();
	  	}
	}
	const submitName = () => {
		if(!!user){
			setIsNameSaved(true);
		}
	}
	return (
		<div className="ChatBox">
			<Modal
			open={!isNameSaved}
			aria-labelledby="simple-modal-title"
			aria-describedby="simple-modal-description"
			className="Modal__Custom"
			>
				<div>
					<h2 id="simple-modal-title">Welcome to <span>Messenger Clone</span>!</h2>
					<h2 id="simple-modal-subtitle">By <a href="https://github.com/MuhammadRehanRasool">@MuhammadRehanRasool</a></h2>
					<p id="simple-modal-description" onKeyPress={onModalEnter}>
						<input type="text" placeholder="Enter your beautiful name..." value={user} onChange={(e) => { setUser(e.target.value) }}/>
						<SendIcon className="sendIcon" onClick={submitName}/>
					</p>
				</div>
			</Modal>
			<div className="messageBox">
				<FlipMove>
					{
						messages.map((message) => {
							return(
								<Message key={message.id} user={user} timestamp={message.data.timestamp} by={message.data.by} message={message.data.message}/>
							);
						})
					}
				</FlipMove>
			</div>
			<div className="inputBox" onKeyPress={OnEnter}>
				<input type="text" placeholder="Write something..." value={newMessage.message} onChange={changeNewMessage}/>
				<SendIcon className="sendIcon" onClick={changeAllMessages}/>
			</div>
		</div>
	);
}

export default ChatBox;
