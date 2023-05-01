"use client";

import axios from "axios";
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("dharaneesh0745@gmail.com");
  const [password, setPassword] = useState("12345");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/register", {
        email,
        password,
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container container-fluid">
      <div className="row mt-5 d-flex justify-content-center">
        <div className="col-10 col-lg-5 ">
          <form
            className="border border-secondary rounded p-4"
            onSubmit={submitHandler}
          >
            <h1 className="mb-4">Sign Up</h1>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="email_field">
                Your E-mail Id
              </label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="password_field">
                Your Password
              </label>
              <input
                type="password"
                id="password_field"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-block w-100 btn-primary btn-block mb-4"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

