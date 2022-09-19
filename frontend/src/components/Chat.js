import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import './Chat.css';
import logo from './pattern3.png'; 
import TimeAgo from 'javascript-time-ago'
// const audio = new Audio('ting.mp3');

const Chat = ({socket, selRoom}) => {
  
  console.log(selRoom);
  const timeAgo = new TimeAgo('en-US')
  const [msgList, setMsgList] = useState([]);
  const [msgText, setMsgText] = useState("");

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  

  socket.on("recmsg", (data) => {
    console.log(data);
    setMsgList([...msgList, data]);
    
  });
    const sendMsg = () => {
    const obj = { text: msgText, createdAt: new Date(), sent: true, room : selRoom , username : currentUser.username
 };
    setMsgList([...msgList, obj]);
    socket.emit("sendmsg", obj);
  };

  const showMsglist = () => {
    return msgList.map((obj) => (
      <div  className={obj.sent ? 'sent-msg' : 'rec-msg' } >
        <p className="text-center fs-5 fst-italic"> {obj.text} </p>
        {/* <p className="mb-0  mx-3">{obj.username}</p> */}
        <p className="my-0 mx-3 ">{timeAgo.format(new Date(obj.createdAt))} {obj.username}</p>
      </div>
    ));
  };
  const mystyle={
    // backgroundImage:`url(${logo})`,
    backgroundImage: `linear-gradient(0deg, #a38fed00 , #a48fed) , url(${logo}) `,
    height:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }

  return (
 <div style={mystyle}>

    <div className="container shadow-lg  p-5   rounded  ">
      
      <div className="card  col-md-10 mx-auto ">
        
        <div className="card-body">
       

         <h3 className="" ><strong>{selRoom} </strong> </h3>
          <h5 className="rounded p-3 mb-2 card-title bg-primary  text-white">
         
         
            <i className="fa-solid fa-comments"></i> 
            LiveChat</h5>
          

        <div className="chat-area"> {showMsglist()} </div>

        <div className="card-footer">
          <div className="form-outline d-flex bd-highlight">
            <input
              type="text"
              id="typeText"
             
              onChange={(e) => setMsgText(e.target.value)}
              className="form-control p-2 w-100 bd-highlight"
            />
            <label className="form-label" for="typeText">
            
              Hi There.
            </label>

            <button
              className="btn btn-primary btn-lg"
              type="submit"
              onClick={sendMsg}
            >
             
              <i className="fa-regular fa-paper-plane"></i>
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default Chat;
