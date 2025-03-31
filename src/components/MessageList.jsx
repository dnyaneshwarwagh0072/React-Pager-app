import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MessageList = () => {
    const [messages, setMessages] = useState([]);


    useEffect(() => {
        axios.get('https://sample-firebase-ai-app-13375-default-rtdb.asia-southeast1.firebasedatabase.app/message.json')
            .then(response => {
                let messageList = [];

                for (let messageID in response.data) {
                    messageList.push(response.data[messageID]);
                }
                messageList.reverse();
                let sortedMessageList = messageList.slice(0, 5);
                setMessages(sortedMessageList);
            }
            )
    }, [messages]);

    return (
        <div className='message-container'>
            {messages.length > 0 && messages.map((messages,idx) => {
                return (
                    <div key={idx} className='message-card'>
                        <div className='user-name'>{messages.name}</div>
                        <div className='user-message'>{messages.message}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default MessageList
