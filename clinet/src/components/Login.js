import React from "react";
import { Link } from "react-router-dom";

const Login = props => {
  return (
    <div className="center-login pt-4">
      <div className="card">
        <form className="text-center border border-light p-5" action="#!">
          <input
            type="email"
            id="defaultLoginFormEmail"
            className="form-control mb-4"
            placeholder="E-mail"
          />
          <input
            type="password"
            id="defaultLoginFormPassword"
            className="form-control mb-4"
            placeholder="Password"
          />

          <div className="d-flex justify-content-around">
            <div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="defaultLoginFormRemember"
                />
              </div>
            </div>
          </div>
          <button
            onClick={() => {
              props.signIn(true);
              props.history.push("/events");
            }}
            className="btn btn-info btn-block my-4"
            type="submit"
          >
            Sign in
          </button>

          <p>
            <Link to="/signup">Register</Link>
          </p>

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
        </form>
      </div>
    </div>
  );
};

export default Login;
