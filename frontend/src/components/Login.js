import { Formik } from 'formik';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
export const Login = () => {
  const navigate = useNavigate();

  const loginsubmit = async (formdata) => {
     console.log(formdata);
     
      const response = await fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        body:JSON.stringify(formdata),
        headers:{
          'Content-type' : 'application/json'
        }


       })

       if (response.status ===  200){
        const userdata =  JSON.stringify(await response.json())
        sessionStorage.setItem('user',userdata);
        console.log("user login")
         Swal.fire({
          icon:'success',
          text:'login successfully'
          })

          navigate('/Room');
        }
        else if((response.status === 401)){
          Swal.fire({
            icon:'error',
            title:"invalid input",
            text:'login failed'
            })
        }
        else{
          console.log('unknown error ocuured');
        }


  }
  return ( 
    <div>
        <>
  {/* Section: Design Block */}
  <section className="text-center">
    {/* Background image */}
    <div
      className="p-5 bg-image"
      style={{ 
        backgroundImage:
          'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")',
        height: 300
      }}
    />
    {/* Background image */}
    <div
      className="card mx-4 mx-md-5 shadow-5-strong"
      style={{
        marginTop: "-100px",
        background: "hsla(0, 0%, 100%, 0.8)",
        backdropFilter: "blur(30px)"
      }}
    >
      <div className="card-body py-5 px-md-5">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-5">Login now</h2>
            <Formik initialValues={{email:"", password:""}}
            onSubmit={loginsubmit}>
              {({values, handleSubmit ,handleChange})=>(
            <form onSubmit={handleSubmit} >   
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  onChange={handleChange}
                  value={values.email}
                  className="form-control"
                />
                <label className="form-label" htmlFor="form3Example3">
                  Email address
                </label>
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="password"
                  onChange={handleChange}
                  value={values.password}
                  className="form-control"
                />
                <label className="form-label" htmlFor="form3Example4">
                  Password
                </label>
              </div>
           
              <button type="submit" className="btn btn-primary btn-block mb-4">
                Login 
              </button>
              <div>
              <p className="mb-0" >Don't have an account? <Link to="/Register" className="fw-bold"  >Sign Up</Link>
              </p>
              {/* <NavLink className="nav-link active" aria-current="page" to="Register">
                Register
               </NavLink> */}
            </div>
              {/* Register buttons */}
              {/* <div className="text-center">
                <p>or sign up with:</p>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-facebook-f" />
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-google" />
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-twitter" />
                </button>
                <button
                  type="button"
                  className="btn btn-link btn-floating mx-1"
                >
                  <i className="fab fa-github" />
                </button>
              </div> */}
            </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Section: Design Block */}
</>

    </div>
  )
}
export default Login;
