import { useState, useEffect } from "react";
import { FormRow, Logo, Alert } from "../components";
import Wrapper from "../assets/wrappers/registerCss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser, faAt } from "@fortawesome/free-solid-svg-icons";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
  showAlert: false
};

function Register() {
  const [values, setValues] = useState(initialState);

  // global context and useNavigate later

  const handleChange = (e) => {
    console.log(e.target);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Wrapper className="full-page">
      <form className="form section" onSubmit={onSubmit}>
        { values.showAlert && <Alert /> }
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
                  <label for="reg-log"></label>
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Log In</h4>
                            <FormRow
                              type="email"
                              name="email"
                              value={values.name}
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
                            <button type="submit" className="btn mt-4">
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
                              value={values.name}
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
                            <button type="submit" className="btn mt-4">
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

        {/* commented */}
        {/* <Logo />
        <h3>Login</h3>

        
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>

          <input
            type='text'
            value={values.name}
            name='name'
            onChange={handleChange}
            className='form-input'
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button> */}
      </form>
    </Wrapper>
  );
}
export default Register;
