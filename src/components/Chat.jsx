import React, { useState, useEffect, useRef } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { userMessage, sendMessage } from "../actions/watson";
import { useFormatMessage } from 'react-intl-hooks';
import { english, spanish } from '../actions';

const Chat = ({ chat, userMessage, sendMessage }) => {
  const language = useSelector(state => state.response)
  const dispatch = useDispatch();
  const t = useFormatMessage();
  const [message, setMessage] = useState("");
  const [intl, setIntl] = useState("zh-CN");
  const endOfMessages = useRef(null);
  const scrollToBottom = () => {
    endOfMessages.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleClick = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      userMessage(message);
      sendMessage(message);
      setMessage("");
      dispatch(spanish());
    }
  };

  useEffect(scrollToBottom, [chat]);

  return (
    <div className="chat">
        <h1>Chatbot</h1>
        <div>
          <button onClick={()=> dispatch(english())}>English</button>
          <button onClick={()=> dispatch(spanish())}>Spanish</button>
        </div>
        <div className="historyContainer">
          {chat.length === 0
            ? ""
            : chat.map((msg, index) => 
            <div className={msg.type} 
            key={index}>
            {t({ id: msg.message.toUpperCase() })}
            </div>)}
          <div ref={endOfMessages}></div>
        </div>
        <input
          id="chatBox"
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleClick}
          value={message}
        ></input>
    </div>
  );
};
const mapStateToProps = (state) => ({
  chat: state.watson.messages,
});

export default connect(mapStateToProps, { userMessage, sendMessage })(Chat);