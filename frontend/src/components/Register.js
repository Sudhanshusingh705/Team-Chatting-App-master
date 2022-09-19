import React from "react";
import { Formik } from 'formik';
import Swal from 'sweetalert2'
import { Link } from "react-router-dom";

const Register = () => {

    const userSubmit =  async (formdata) => {
        console.log(formdata);

        const response = await fetch( 'http://localhost:5000/user/add', {
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
              text : 'Registered Successfully'
          })
      }

      console.log('request sent');  



    }
  return (
      <>
        {/* Section: Design Block */}
        <section className="text-center">
          {/* Background image */}
          <div
            className="p-5 bg-image"
            style={{
              backgroundImage: `
                url("https://mdbootstrap.com/img/new/textures/full/171.jpg")`,
              height: 300,
            }}
          />
          {/* Background image */}
          <div
            className="card mx-4 mx-md-5 shadow-5-strong"
            style={{
              marginTop: "-100px",
              background: "hsla(0, 0%, 100%, 0.8)",
              backdropFilter: "blur(30px)",
            }}
          >
            <div className="card-body py-5 px-md-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h2 className="fw-bold mb-5">Sign up now</h2>
                  <Formik
                    initialValues={{ username: "", email: "", password: "" }}
                    onSubmit={userSubmit}>
                    {({ values, handleSubmit, handleChange }) => (
                      <form 
                      onSubmit={handleSubmit}
                      >
                        <div className="form-outline mb-4">
                          <input
                            type="text"
                            id="username"
                            value={values.username}
                            onChange={handleChange}
                            className="form-control"
                          />
                          <label className="form-label" >
                            Name
                          </label>
                        </div>

                        {/* Email input */}
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
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
                            value={values.password}
                            onChange={handleChange}
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="form3Example4">
                            Password
                          </label>
                        </div>           
                        <button
                          type="submit"
                          className="btn btn-primary btn-block mb-4"
                        >
                          Sign up
                        </button>
                          
                        <p className="mb-0" >Already have an acount? <Link to="/Login" className="fw-bold"  >Login</Link>
              </p>
                      </form>
                    )}
                </Formik> 
                </div>
              </div>
            </div>
          </div>
        </section>
      </>

  );
};
export default Register;
