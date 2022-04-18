import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
const Login = () => {

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || '/';



  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handelLoginForm = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password, error);
    signInWithEmailAndPassword(email, password);
    console.log(email, password, error);
  };
  if (user) {
    navigate(from, {replace: true });
  }

  return (
    <div>
      <div className="d-flex justify-content-center mb-5">
        <div
          className="w-25 d-flex flex-column "
        >
          <h1 className="text-center my-2 pt-5">Please Login</h1>
          <Form className="my-3 pt-2" onSubmit={handelLoginForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3 pt-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Button variant="link" className="p-0 mt-3">Forgot Password?</Button>
            
            <Button className="py-2 mt-4 w-50 mx-auto d-block" type="submit">
              Sign In
            </Button>
          </Form>
          <div className="d-flex justify-content-center mt-2"><Link to="/signup">Don't have any account?</Link></div>
          <p className="text-danger text-center mt-1">{error?.message}</p>
          <GoogleSignIn></GoogleSignIn>
        </div>
      </div>
    </div>
  );
};

export default Login;
