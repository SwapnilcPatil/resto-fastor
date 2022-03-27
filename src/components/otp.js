import React from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";

const Otp = () => {
  const navigate = useNavigate();

  const OtpSchema = Yup.object().shape({
    otp: Yup.string()
      .min(6, "Enter Otp")
      .max(6, "Invalid! Enter 6 Digits Only")
      .required("Enter Otp"),
  });

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
              paddingTop: "5%",
            }}
          >
            Angry?? Just one step away!!!
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
                  Enter OTP
                </h2>
                <Formik
                  initialValues={{ otp: "" }}
                  validationSchema={OtpSchema}
                  onSubmit={(values, actions) => {
                    if (values.otp === 123456) {
                      navigate("/restaurant-list");
                    } else {
                      alert("Invalid Otp!");
                    }
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
                        OTP
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
                          maxLength={6}
                          type="number"
                          onChange={props.handleChange}
                          onBlur={props.handleBlur}
                          value={props.values.phoneNumber}
                          name="otp"
                        />
                      </div>
                      {console.log("👩‍👩‍👧‍👧", props)}
                      {props.errors.otp && (
                        <div style={{ color: "red" }} id="feedback">
                          {props.errors.otp}
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
export default Otp;
