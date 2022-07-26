import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import "../components/style/index.module.css"
import "../components/style/layout.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Layout from "../components/Layout"

import Login from "../components/Login"

const IndexPage = () => (
  <Layout>
    <Login />
  </Layout>
)
export default IndexPage
