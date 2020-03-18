import React from "react";

const SignUp = props => {
  return (
    <div className="center-signup">
      <div className="card">
        <form className="text-center border border-light px-5 py-2" action="#!">
          <p className="regiter-label h4 mb-4">Register with Fly Inc Events</p>

          <div className="form-row mb-4">
            <div className="col">
              <input
                type="text"
                id="defaultRegisterFormFirstName"
                className="form-control"
                placeholder="First name"
              />
            </div>
            <div className="col">
              <input
                type="text"
                id="defaultRegisterFormLastName"
                className="form-control"
                placeholder="Last name"
              />
            </div>
          </div>
          <input
            type="email"
            id="defaultRegisterFormEmail"
            className="form-control mb-4"
            placeholder="E-mail"
          />

          <input
            type="password"
            id="defaultRegisterFormPassword"
            className="form-control mb-4"
            placeholder="Password"
            aria-describedby="defaultRegisterFormPasswordHelpBlock"
          />

          <input
            type="text"
            id="defaultRegisterPhonePassword"
            className="form-control mb-4"
            placeholder="Phone number"
            aria-describedby="defaultRegisterFormPhoneHelpBlock"
          />

          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="defaultRegisterFormNewsletter"
            />
          </div>

          <button
            onClick={e => {
              e.preventDefault();
              props.history.push("/login");
            }}
            className="btn btn-info my-2 btn-block"
            type="submit"
          >
            Sign Up
          </button>

          <a href="#" className="mx-2" role="button">
            <i className="fab fa-facebook-f light-blue-text"></i>
          </a>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-twitter light-blue-text"></i>
          </a>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-linkedin-in light-blue-text"></i>
          </a>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-github light-blue-text"></i>
          </a>

          <hr />

          <p>
            By clicking
            <em>Sign up</em> you agree to our
            <a href="" target="_blank">
              terms of service
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
