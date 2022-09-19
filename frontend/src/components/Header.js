// import React, { useState } from 'react'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom';




const Header =() => {
  const navigate = useNavigate();
  let userState = sessionStorage.getItem('user');
  const signOut = () => {
    sessionStorage.removeItem('user');
    // <Navigate to='/Login' replace={true} />
    navigate('/Login');
}

const logIn = () => {
    // <Navigate to='/Login' replace={true}/>
    navigate('/Login');
    
}

   
  return (
    <div>
      
       <nav className="navbar  navbar-light bg-light navbar-lg  mb-3">
  <div className="container-fluid ">
   
     <NavLink className="nav-link  navbar-brand active"  aria-current="page" to="Home">
     <i class="fa-solid fa-comments"></i> 
          LiveChat
        </NavLink>
       
        <div  className='d-flex justify-content-around'>
      
         {/* <NavLink className="nav-link active navbar-brand"  aria-current="page" to="Room">
          Room's
         </NavLink> */}
         <Link  to="/Login" className="btn btn-outline-dark text-center  ">
                           Room</Link> 

        <div className="d-flex align-items-center px-3 ">
        {(userState === null)
         ? <button type="button" onClick={logIn} className="btn btn-outline-link px-3 me-2" data-mdb-ripple-color="dark">Login</button>
         : <button type="button" onClick={signOut} className="btn btn-outline-danger px-3 me-2" data-mdb-ripple-color="dark">Sign Out</button>}
        </div>
        </div>
     
  </div>

</nav>




    </div>
  )
}
export default Header ;