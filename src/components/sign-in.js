import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const SignIn = () => {
  const navigate = useNavigate();

  // Schema for Phone number Validations
  const SignupSchema = Yup.object().shape({
    phoneNumber: Yup.string()
      .min(10, "Enter 10 Digits")
      .max(10, "Invalid! Enter 10 Digits Only")
      .required("Enter Number"),
  });

// funtion to send otp
  const numberSignin = (code, number) => {
    fetch("https://staging.fastor.in/v1/pwa/user/register", {
      method: "POST",
      body: {
        phone: number,
        dial_code: code,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        navigate("otp");
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80)",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundSize: "cover",
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100vh",
            width: "100vw",
            backgroundColor: "#222222",
            zIndex: "2",
            opacity: "0.7",
          }}
        >
          <h1
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "8",
              color: "#4ae648",
              fontFamily: "serif",
              fontSize: "70px",
              paddingTop: "1%",
            }}
          >
            Hungry?? Let's Get Started
          </h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "1%",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "2px solid rgb(231 144 0)",
                color: "#ffffff",
                textShadow: "0 -1px 0 rgba(0, 0, 0, 0.25)",
                padding: " 50px 30px",
                borderRadius: "10px",
              }}
            >
              <div>
                <h2
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: "8",
                    color: "white",
                    fontFamily: "serif",
                  }}
                >
                  Enter Mobile Number
                </h2>
                <Formik
                  initialValues={{ code: "+91", phoneNumber: "" }}
                  validationSchema={SignupSchema}
                  onSubmit={(values, actions) => {
                    let tempNumber = parseInt(values.phoneNumber, 10);
                    let tempCode = parseInt("+91", 10);
                    numberSignin(tempNumber, tempCode);
                  }}
                >
                  {(props) => (
                    <form onSubmit={props.handleSubmit}>
                      <label
                        style={{
                          zIndex: "8",
                          color: "white",
                          fontFamily: "serif",
                        }}
                      >
                        Code
                      </label>
                      <div>
                        <input
                          style={{
                            zIndex: "4",
                            fontSize: "18px",
                            fontFamily: "serif",
                            color: "black",
                            padding: " 5px 20px",
                            borderRadius: "10px",
                          }}
                          type="number"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.code}
                          name="code"
                        />
                      </div>
                      {console.log("🤭", props)}
                      <label
                        style={{
                          zIndex: "8",
                          color: "white",
                          fontFamily: "serif",
                        }}
                      >
                        Phone Number
                      </label>
                      <div>
                        <input
                          style={{
                            zIndex: "4",
                            fontSize: "18px",
                            fontFamily: "serif",
                            color: "black",
                            // textShadow: "0 -1px 0 rgba(0, 0, 0, 0.25)",
                            padding: " 5px 20px",
                            borderRadius: "10px",
                          }}
                          type="number"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.phoneNumber}
                          name="phoneNumber"
                        />
                      </div>
                      {props.errors.phoneNumber && (
                        <div style={{ color: "red" }} id="feedback">
                          {props.errors.phoneNumber}
                        </div>
                      )}
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          margin: "20px",
                        }}
                      >
                        <button
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "rgb(231 144 0)",
                            backgroundRepeat: "repeat-x",
                            color: "#ffffff",
                            textShadow: "0 -1px 0 rgba(0, 0, 0, 0.25)",
                            padding: "10px 30px 10px 30px",
                            borderRadius: "10px",
                          }}
                          disabled={!(props.isValid && props.dirty)}
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignIn;
