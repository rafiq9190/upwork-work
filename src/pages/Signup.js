import React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Form } from "react-bootstrap"
import Layout from "../components/Layout"

function Signup() {
  return (
    <Layout>
      <div className="container main-container-signup">
        <p
          style={{
            fontSize: "32px",
            color: "#5a5d63",
            textAlign: "center",
            padding: "1rem",
          }}
        >
          Sign up for free and start building in minutes
        </p>

        <div>
          <Form.Control
            type="text"
            placeholder="Full Name"
            className="bg-light"
          />
          <br />
          <Form.Control type="text" placeholder="Email" className="bg-light" />
          <br></br>
          <Form.Control
            type="password"
            placeholder="Password"
            className="bg-light"
          />
          <br />
          <div className="d-flex">
            <Form.Check type="checkbox" id="" label={``} />
            <span>
              I accept the{" "}
              <Link to="" style={{ color: "#6F87D5", cursor: "pointer" }}>
                terms and conditions
              </Link>
            </span>
          </div>
          <br></br>
          <div className="form-btn">Sign up for free</div>

          <p style={{ textAlign: "center", margin: "10px" }}>or</p>
          <div className="google-auth">
            <span style={{ marginTop: "0.2rem" }}>
              <StaticImage
                height={20}
                style={{ margin: 0 }}
                src="../images/google.jpg"
              />
            </span>
            <span style={{ marginLeft: "1rem" }}>Sign up with Google</span>
          </div>
          <br></br>
          <p style={{ textAlign: "center" }}>
            Already have an account?{" "}
            <span style={{ color: "#6F87D5", cursor: "pointer" }}>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Signup
