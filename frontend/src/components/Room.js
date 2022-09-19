import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import logo from './pattern3.png';
import { Formik } from 'formik';
import Swal from 'sweetalert2'
import TimeAgo from 'javascript-time-ago'
import './Room.css';
 const Room = ({socket, selRoom, setSelRoom}) => {

  const [roomName, setRoomName] = useState("");
  const [RoomList, setRoomList] = useState(['HTML']);
  const timeAgo = new TimeAgo('en-US')
  const navigate = useNavigate();

  console.log(roomName);

  // const addNewRoom = async() => {
    // socket.emit('joinroom', roomName);
    // setRoomList([...RoomList, roomName])
    // console.log(RoomList);
    //    const response = await fetch('http://localhost:5000/room/add',{
    //     method : 'POST',
    //     body : JSON.stringify(roomName),
    //     headers : {
    //         'Content-Type' : 'application/json'
    //     }
    //    })
    //    console.log(response.status);

    //    if(response.status === 200){
    //     console.log('user data added!');
    //     Swal.fire({
    //         icon : 'success',
    //         title : 'your room created',
    //         text : ' Successfully'
    //     })
    // }

    // console.log('request sent');  

//  ]
 const joinRoom = (room) => {
  socket.emit('joinroom', room);
  setSelRoom(room);
  setTimeout(() => {
    navigate('/Chat');
  }, 1000);
 }

   const showRoomList = ()=> {
     return RoomList.map((room) => 
     <div
      className="card mt-5 col-md-4 border border-5">
    <div className="card-body">
      <h5 className="card-title"> {room.roomname}</h5>
      {/* <p>{timeAgo.format(new Date(room.createdAt()))}</p> */}
    </div>
    <div className="card-footer">
      {/* <small className="text-muted">tap to chat chat...</small>  */}
      <button type="button" className="btn btn-dark " onClick={e => joinRoom(room.roomname)}> tap to chat..</button>
    </div>
    </div> );

}
const mystyle={
  // backgroundImage:`url(${logo})`,
  backgroundImage: `linear-gradient(0deg, #a38fed00 , #a48fed) , url(${logo}) `,
  height:'100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}

const userSubmit = async (formdata) => {
   console.log(formdata);
    const response = await fetch( 'http://localhost:5000/room/add',{
      method : 'POST',
      body : JSON.stringify(formdata),
      headers : {
          'Content-Type' : 'application/json'
      }

    })
    console.log(response.status);
    if(response.status === 200){
      console.log('user data added!');
      Swal.fire({
          icon : 'success',
          title : 'Well Done',
          text : 'Room created Successfully'
      })
  }

}  




const getDataFromBackend = async () => {
  const response = await fetch("http://localhost:5000/room/getall");
  const data = await response.json();
  console.log(data);
  console.log("request sent");
  setRoomList(data);
};

useEffect(() => {
  getDataFromBackend();
}, []);



  return (

  <div style={mystyle} className="pt-5 " >
  <div className='container     '>
   
   <div  className='row d-flex justify-content-center'>
     <div className='card col-md-10 roomcard' >
        <div  className='card-body row d-flex justify-content-center '>
          <Formik
          initialValues={{roomname:"", createdAt: new Date()}}
          onSubmit={userSubmit}
          >
           {({ values, handleSubmit, handleChange }) => (
          <form onSubmit={handleSubmit}>

        <div className="form-outline d-flex bd-highlight  overflow-auto ">
            <input
              type="text"
              value={values.roomname}
              id="roomname"
              onChange={handleChange}
              // onChange={e => setRoomName(e.target.value)}
              className="form-control p-2 w-100 bd-highlight border shadow-2-strong"
            />
            <label className="form-label" htmlfor="typeText">
              {" "}
              type your Room name{" "}
            </label>

            <button
              className="btn btn-primary  p-2 flex-shrink-1 bd-highlight"
              type="submit"
              // onClick={addNewRoom}
            >Create Room
        
            </button>
          </div>
          </form>
           )}
         </Formik>
         <div className="room-area">
              {showRoomList()}
              </div>
          </div>
       
     </div>

   </div>
  
 



 </div>
 </div>  
)
}
export default Room
