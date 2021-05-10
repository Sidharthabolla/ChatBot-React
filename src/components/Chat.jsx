import React, { useState, useEffect, useRef } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { userMessage, sendMessage } from "../actions/watson";
import { useFormatMessage } from 'react-intl-hooks';
import { english, spanish, userMsg } from '../actions';

const Chat = ({ chat, userMessage, sendMessage }) => {
  const response = useSelector(state => state.usermsg);
  console.log(response);
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
      dispatch(userMsg(message.toUpperCase()));
    }
  };

  useEffect(scrollToBottom, [chat]);

  return (
    <div className="chat">
        <h1>Chatbot</h1>
        <div>
          <button className="button" onClick={()=> dispatch(english())}>English</button>
          <button className="button" onClick={()=> dispatch(spanish())}>Spanish</button>
        </div>
        <div className="historyContainer">
          {chat.length === 0
            ? ""
            : chat.map((msg, index) => 
            <div className={msg.type} 
            key={index}>
            {t({ id: msg.message.toUpperCase() })}
            </div>)}
          {response.length === 0 
            ? ""
            :
            <div className="bot">{t({ id: response.toUpperCase() })}</div>}
          {response.length !== 0 && response === 'SURE! PLEASE CHOOSE A DATE' ?
           <div className="bot">Date Picker</div> : ""}
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