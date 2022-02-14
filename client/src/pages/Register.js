import { useState, useEffect } from "react";
import { FormRow, Logo, Alert } from "../components";
import './Register.css';
import Wrapper from "../assets/wrappers/registerCss";
import { useAppContext } from '../context/appContext'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faAt } from "@fortawesome/free-solid-svg-icons";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  
};

function Register() {
  const [values, setValues] = useState(initialState);

  const { isLoading, showAlert, displayAlert } = useAppContext()
  // global context and useNavigate later

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  };

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }
    console.log(values)
  }
  
  return (
    <Wrapper className="full-page outline" >
      <form className="form section" onSubmit={onSubmit}>
      {showAlert && <Alert />}
        
        <div className="section">
          <div className="container">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 className="mb-0 pb-3">
                    <span>Log In </span>
                    <span>Sign Up</span>
                  </h6>
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="reg-log"
                    name="reg-log"
                  />
                  <label htmlFor="reg-log"></label>
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Log In</h4>
                            <FormRow
                              type="email"
                              name="email"
                              value={values.email}
                              handleChange={handleChange}
                              fontAwesome={faAt}
                            />

                            <FormRow
                              type="password"
                              name="password"
                              value={values.password}
                              handleChange={handleChange}
                              fontAwesome={faLock}
                            />
                            <button type="submit" className="btn mt-4" disabled={isLoading}>
                              submit
                            </button>
                            <p className="mb-0 mt-4 text-center">
                              <a href="#0" className="link">
                                Forgot your password?
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-back">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Sign Up</h4>
                            <FormRow
                              type="name"
                              name="name"
                              value={values.name}
                              handleChange={handleChange}
                              fontAwesome={faUser}
                            />
                            <FormRow
                              type="email"
                              name="email"
                              value={values.email}
                              handleChange={handleChange}
                              fontAwesome={faAt}
                            />

                            <FormRow
                              type="password"
                              name="password"
                              value={values.password}
                              handleChange={handleChange}
                              fontAwesome={faLock}
                            />
                            <button type="submit" className="btn mt-4" disabled={isLoading}>
                              submit
                            </button>
                            {/* <a href="#" className="btn mt-4">submit</a> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </form>
    </Wrapper>
  );
}
export default Register;
