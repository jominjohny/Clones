import { Avatar } from '@material-ui/core'
import React, { useState } from 'react'
import './Message.css'


function Message({ timestamp, message, user }) {
    const [chosenEmoji, setChosenEmoji] = useState(null);

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    };
    return (
        <div className="message">
            <Avatar src={user.photo} />
            <div className="messgae__info">
                <h4>{user.displayName}
                    <span className="message__timeStamp">
                        {new Date(timestamp?.toDate()).toUTCString()}
                    </span>
                </h4>
                <p>{message}</p>

            </div>

        </div>
    )
}

export default Message
