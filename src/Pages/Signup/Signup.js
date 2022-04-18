import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Signup.css";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import Loading from "../Loading/Loading";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

  <ToastContainer />
  const navigate = useNavigate();
  const [isChacked, setIsChacked] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [
    sendEmailVerification,
    sendingEmailVerification,
    errorEmailVerification,
  ] = useSendEmailVerification(auth);
  const verifyEmail = async () => {
    await sendEmailVerification();
    alert("Sent email! Please Verify");
  };
  const handelForm = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conformPassword = e.target.conformPassword.value;
    if (password === conformPassword) {
      await createUserWithEmailAndPassword(email, password);
      verifyEmail();
    } else {
      toast("password wrong!");
    }
  };
  if (loading || sendingEmailVerification) {
    return <Loading />;
  }
  if (user) {
    navigate("/home");
  }
  return (
    <div className="d-flex justify-content-center my-5">
      <div className="w-25 d-flex flex-column justify-content-center ">
        <h1 className="text-center">Create Account</h1>
        <button
        onClick={async () => {
          await sendEmailVerification();
          alert('Sent email');
        }}>hmm</button>
        <Form className="my-3 " onSubmit={handelForm}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="conformPassword">
            <Form.Control
              type="password"
              name="conformPassword"
              placeholder="Conform Password"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              style={{ userSelect: "none" }}
              type="checkbox"
              id="disabledFieldsetCheck"
              label="Accept Terms & Condition"
              onClick={() => {
                setIsChacked(!isChacked);
              }}
            />
          </Form.Group>

          <input
            className="mx-auto w-50 d-block btn btn-primary"
            type="submit"
            value="Sign Up"
            disabled={!isChacked}
          />
        </Form>

        <div className="d-flex justify-content-center ">
          <Link to="/login">Already Have an account?</Link>
        </div>
        <p className="text-danger text-center mt-1">
          {error?.message || errorEmailVerification?.message}
        </p>
        <GoogleSignIn></GoogleSignIn>
      </div>
    </div>
  );
};

export default Signup;
