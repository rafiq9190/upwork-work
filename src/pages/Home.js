import React from "react"
import { Card, Form } from "react-bootstrap"
import { BsSearch, BsPlus } from "react-icons/bs"
import { Layout } from "../components/layout"
import NavBar from "../components/Nav"

function Home() {
  return (
    <>
      <div className="container ">
        <h2 className="mt-2">Start with a Template</h2>
        <div className="row mt-4 ">
          <div className="home-left col-lg-2 col-md-12 col-sm-12">
            <div className="case-body-select">
              <h6 style={{ marginTop: "10px" }}>USE CASES</h6>
              <ul>
                <li>All (38)</li>
                <li>Client Portals (7)</li>
                <li>Internal Tools (7)</li>
                <li>Dashboard (1)</li>
                <li>Marketplaces (4)</li>
                <li>Online Communities (3)</li>
                <li>Resource Directories (9)</li>
                <li>Websites (12)</li>
              </ul>
            </div>
            <div className="case-select">
              <Form.Select aria-label="Default select example">
                <option>USE CASES</option>
                <option value="1">All (38)</option>
                <option value="2">Client Portals (7)</option>
                <option value="3">Internal Tools (7)</option>
                <option value="4">Dashboard (1)</option>
                <option value="5">Marketplaces (4)</option>
                <option value="6">Online Communities (3)</option>
                <option value="7">Resource Directories (9)</option>
                <option value="7">Websites (12)</option>
              </Form.Select>
            </div>
          </div>
          <div className="home-right col-lg-10 ">
            <Form className="d-flex ">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                className="bg-light"
              />
              <div className="search-icon">
                <BsSearch />
              </div>
            </Form>
            <div className="row mt-5">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card ">
                  <button>
                    <BsPlus />
                  </button>
                  <div style={{ fontWeight: 500 }}>create new app</div>
                  <div>Click to start a project from scratch</div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                {" "}
                <div className="card-template">
                  <div className="card-template-body">
                    <div className="template-body-buttons">
                      <button className="btn-primary">Use Template</button>
                      <button className="sw-btn">Preview</button>
                    </div>
                  </div>
                  <div className="template-bottom">
                    <div
                      // className="mb-3 "
                      style={{
                        fontSize: "13px",
                        fontWeight: "bold",
                        marginBottom: "2px",
                      }}
                    >
                      Employee Directory
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeigh: 500,
                      }}
                    >
                      View and manage all your company ...
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                {" "}
                <div className="card-template">
                  <div className="card-template-body">
                    <div className="template-body-buttons">
                      <button className="btn-primary">Use Template</button>
                      <button className="sw-btn">Preview</button>
                    </div>
                  </div>
                  <div className="template-bottom">
                    <div
                      // className="mb-3 "
                      style={{
                        fontSize: "13px",
                        fontWeight: "bold",
                        marginBottom: "2px",
                      }}
                    >
                      Employee Directory
                    </div>
                    <div
                      style={{
                        fontSize: "13px",
                        fontWeigh: 500,
                      }}
                    >
                      View and manage all your company ...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
