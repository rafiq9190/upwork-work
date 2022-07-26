import React, { useState } from "react"
import { FaRegUserCircle } from "react-icons/fa"
import NavBar from "../components/Nav"

function Dashboard() {
  const [isOpen, setisOpen] = useState(false)
  const [dropOpen, setdropOpen] = useState(false)

  const clickHandler = () => {
    setisOpen(!isOpen)
  }
  const handlerClick = () => {
    setdropOpen(!dropOpen)
  }
  return (
    <>
      <NavBar />
      <div className="dashboard-container">
        <div className="dashboard-sidebar">
          <div className="sidebar-header">Logo</div>
          <div className="sidebar-body sidenav-body-part">
            <div style={{ marginBottom: "32px" }}>
              <h2
                style={{
                  marginBottom: "16px",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                Application
              </h2>
            </div>
            <div className="body-part">
              <div className="menu-item">
                <div className="menu-item active">
                  <i className="sw-squares-four-blue"></i>
                  <span
                    style={{
                      position: "relative",
                      bottom: "3px",
                      left: "8px",
                    }}
                  >
                    All
                  </span>
                </div>

                <div className="menu-item ">
                  <i className="sw-folder"></i>
                  <span
                    style={{
                      position: "relative",
                      bottom: "3px",
                      left: "8px",
                    }}
                  >
                    Mine
                  </span>
                </div>
                <div className="menu-item ">
                  <i className="sw-users"></i>
                  <span
                    style={{
                      position: "relative",
                      bottom: "3px",
                      left: "8px",
                    }}
                  >
                    Shared with me
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="sidebar-body sidenav-body-part">
            <h2
              style={{
                marginBottom: "16px",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Learn
            </h2>
            <div className="menu-item">
              <div className="menu-item active">
                <i className="sw-book"></i>
                <span
                  style={{
                    position: "relative",
                    bottom: "3px",
                    left: "8px",
                  }}
                >
                  Documentation
                </span>
              </div>

              <div className="menu-item ">
                <i className="sw-book"></i>
                <span
                  style={{
                    position: "relative",
                    bottom: "3px",
                    left: "8px",
                  }}
                >
                  Video Tutorials
                </span>
              </div>
            </div>
          </div>
          <div className="sidebar-body ">
            <h2
              style={{
                marginBottom: "16px",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              Help & Support
            </h2>
            <div className="menu-item">
              <div className="menu-item active">
                <i className="sw-chat"></i>
                <span
                  style={{
                    position: "relative",
                    bottom: "3px",
                    left: "8px",
                  }}
                >
                  Chat with us
                </span>
              </div>

              <div className="menu-item ">
                <i className="sw-slack"></i>
                <span
                  style={{
                    position: "relative",
                    bottom: "3px",
                    left: "8px",
                  }}
                >
                  Slack Community
                </span>
              </div>
              <div className="menu-item ">
                <i className="sw-feedback"></i>
                <span
                  style={{
                    position: "relative",
                    bottom: "3px",
                    left: "8px",
                  }}
                >
                  Submit feedback
                </span>
              </div>
              <div className="menu-item ">
                <i className="sw-whatNew"></i>
                <span
                  style={{
                    position: "relative",
                    bottom: "3px",
                    left: "8px",
                  }}
                >
                  What’s new?
                </span>
              </div>
              <div className="menu-item ">
                <i className="sw-bus"></i>
                <span
                  style={{
                    position: "relative",
                    bottom: "3px",
                    left: "8px",
                  }}
                >
                  Roadmap
                </span>
              </div>
              <div className="menu-item  ">
                <i className="sw-twitter"></i>
                <span
                  style={{
                    position: "relative",
                    bottom: "3px",
                    left: "8px",
                  }}
                >
                  Twitter
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-main">
          <div className="d-flex justify-content-end">
            <FaRegUserCircle
              style={{
                color: "#AFAFB5",
                fontSize: "25px",
                marginTop: "10px",
                position: "relative",
              }}
              onClick={clickHandler}
            />

            {isOpen ? (
              <div className="header-action-dropdown">
                <div className="header-action">
                  <i className="sw-user"></i>
                  <span className="user-details">My account</span>
                </div>
                <div className="header-action">
                  <i className="sw-dashboard"></i>
                  <span className="user-details">Dashboard</span>
                </div>
                <div className="header-action">
                  <i className="sw-power"></i>
                  <span className="user-details">Sign out</span>
                </div>
              </div>
            ) : null}
          </div>
          <div className="template-area">
            <h1 className="mb-3">Templates</h1>
            <div className="template-body">
              <div className="template-wrapper">
                <div className="template-items">
                  <div className="template-item-body ">
                    <div className="template-inner"></div>
                  </div>
                  <div className="template-item-title">New Application</div>
                </div>
                <div className="template-item">
                  <div className="template-item-body ">
                    <div className="template-inners"></div>
                    <div className="body-content">
                      Select
                      <i className="sw-arrow"></i>
                    </div>
                  </div>
                  <div className="template-item-title">Client Portal</div>
                </div>
                <div className="template-item">
                  <div className="template-item-body ">
                    <div className="template-inners"></div>
                    <div className="body-content">
                      Select
                      <i className="sw-arrow"></i>
                    </div>
                  </div>
                  <div className="template-item-title">Client Portal</div>
                </div>
                <div className="template-item">
                  <div className="template-item-body ">
                    <div className="template-inners"></div>
                    <div className="body-content">
                      Select
                      <i className="sw-arrow"></i>
                    </div>
                  </div>
                  <div className="template-item-title">Investors Portal</div>
                </div>
                <div className="template-item">
                  <div className="template-item-body ">
                    <div className="template-inners"></div>
                    <div className="body-content">
                      Select
                      <i className="sw-arrow"></i>
                    </div>
                  </div>
                  <div className="template-item-title">Team Wiki</div>
                </div>
                <div className="template-item">
                  <div className="template-item-body ">
                    <div className="template-inners"></div>
                    <div className="body-content">
                      Select
                      <i className="sw-arrow"></i>
                    </div>
                  </div>
                  <div className="template-item-title">Donation Tracker</div>
                </div>
                <div className="template-item">
                  <div className="template-item-body ">
                    <div className="template-inners"></div>
                    <div className="body-content">
                      Select
                      <i className="sw-arrow"></i>
                    </div>
                  </div>
                  <div className="template-item-title">Applicant Tracking</div>
                </div>
                <div className="template-item">
                  <div className="template-item-body ">
                    <div className="template-inners"></div>
                    <div className="body-content">
                      Select
                      <i className="sw-arrow"></i>
                    </div>
                  </div>
                  <div className="template-item-title">
                    Inventory Management
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="app-area">
            <div style={{ position: "relative" }}>
              <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
                All Applications
              </h1>
              <i className="sw-openArrow" onClick={handlerClick}></i>
              {dropOpen ? (
                <div className="header-action-dropdown">
                  <div className="body-part">
                    <div className="menu-item">
                      <div className="menu-item active">
                        <i className="sw-squares-four-blue"></i>
                        <span
                          style={{
                            position: "relative",
                            bottom: "3px",
                            left: "8px",
                          }}
                        >
                          All
                        </span>
                      </div>

                      <div className="menu-item ">
                        <i className="sw-folder"></i>
                        <span
                          style={{
                            position: "relative",
                            bottom: "3px",
                            left: "8px",
                          }}
                        >
                          Mine
                        </span>
                      </div>
                      <div className="menu-item ">
                        <i className="sw-users"></i>
                        <span
                          style={{
                            position: "relative",
                            bottom: "3px",
                            left: "8px",
                          }}
                        >
                          Shared with me
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            <div className="apps-body">
              <div className="apps-item">
                <div className="apps-item-body">
                  <div className="body-content">
                    Open in Studio
                    <i className="sw-arrow"></i>
                  </div>
                  <div className="app-item-body-image sw-icon-image-transparent">
                    <div className="sw-popover ">Change thumbnail</div>
                  </div>
                </div>
                <div className="apps-item-bottom">
                  <div className="d-flex align-items-center bottom-left-side">
                    <span className="app-name">Untitled Application 1</span>
                  </div>
                  <div className="right-side">
                    <i className="sw-dots"></i>
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

export default Dashboard
