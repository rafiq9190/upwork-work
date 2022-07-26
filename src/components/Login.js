import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Form } from "react-bootstrap"
import NavBar from "./Nav"

function Login() {
  return (
    <>
      <NavBar />
      <div className="container main-container">
        <div className="google-auth">
          <span style={{ marginTop: "0.2rem" }}>
            <StaticImage
              height={20}
              style={{ margin: 0 }}
              src="../images/google.jpg"
            />
          </span>
          <span style={{ marginLeft: "1rem" }}>Sign in with Google</span>
        </div>
        <p style={{ textAlign: "center", margin: "10px" }}>or</p>
        <div>
          <Form.Control type="text" placeholder="Email" className="bg-light" />
          <br></br>
          <Form.Control
            type="password"
            placeholder="Password"
            className="bg-light"
          />
          <br />
          <div className="form-btn">Sign In</div>

          <p
            style={{
              textAlign: "center",
              margin: "1rem",
              color: "#6F87D5",
              cursor: "pointer",
            }}
          >
            <Link>Forget password?</Link>
          </p>
          <p style={{ textAlign: "center" }}>
            Haven’t got an account?{" "}
            <span style={{ color: "#6F87D5", cursor: "pointer" }}>
              <Link to="/Signup">Sign Up</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  )
}

export default Login
