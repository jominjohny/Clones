import React from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { useState } from 'react';
import { useEffect } from 'react';
import db from './firebase';
import firebase from 'firebase';
import Picker from 'emoji-picker-react';


function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);

    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);

    const [chosenEmoji, setChosenEmoji] = useState(null);
    const [buttonState, setButtonState] = useState(false);
    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
        var string = input;
        string+=emojiObject.emoji;
        console.log(string)
        setInput(string)
    };


    useEffect(() => {
        if (channelId) {
            db.collection("channels")
                .doc(channelId)
                .collection("messages")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) =>
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                );
        }

    }, [channelId]);

    const sendMessages = (e) => {
        e.preventDefault();
        db.collection('channels')
            .doc(channelId)
            .collection('messages')
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                message: input,
                user: user
            })

        setInput("")
    }
    
    return (
        <div className="chat">
            {/* <h2>I am th chat screens </h2> */}
            <ChatHeader channelName={channelName} />

            <div className="chat__messages">
                {messages.map((message) => (
                    <Message
                        timestamp={message.timestamp}
                        message={message.message}
                        user={message.user}
                    />
                ))}

            </div>
            <div className="chat__input">
                <AddCircleIcon fontSize="large" />
                <form className="chat__inputForm" action="">
                    <input value={input}
                        disabled={!channelId}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder={`Message #${channelName}`} />
                    <button
                        className="chat__inputButton"
                        type="submit"
                        onClick={sendMessages}>Send Message</button>
                        <EmojiEmotionsIcon onClick={()=> setButtonState(!buttonState)} fontSize="large" />
                    {buttonState && <Picker  className="chat__inputIconsPicker" onEmojiClick={onEmojiClick} />}
                </form>
                <div className="chat__inputIcons">
                    
                    <CardGiftcardIcon fontSize="large" />
                    <GifIcon  fontSize="large" />
                    {/* <EmojiEmotionsIcon fontSize="large" /> */}
                </div>
            </div>
        </div>
    )
}

export default Chat
