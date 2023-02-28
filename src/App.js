import "./App.css";
import { useEffect } from "react";
import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/slick/slick.css";
import "./assets/slick/slick-theme.css";
import "./assets/elagent-icon/style.css";
import "./assets/niceselectpicker/nice-select.css";
import "./assets/animation/animate.css";
// import "./assets/mcustomscrollbar/jquery.mCustomScrollbar.min.css";
import "./css/style-main.css";
import "./css/responsive.css";
import { IonIcon } from "react-ion-icon";

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    const link = document.createElement("link");

    link.rel = "shortcut icon";
    link.href = "././img/favicon.ico";
    link.type = "image/x-icon";
    document.body.appendChild(link);

    script.src = "./js/jquery-3.5.1.min.js";
    script.async = true;

    document.body.appendChild(script);

    script.src = "./js/pre-loader.js";
    document.body.appendChild(script);

    script.src = "./js/jquery.parallax-scroll.js";
    document.body.appendChild(script);

    script.src = "./js/plugins.js";
    document.body.appendChild(script);

    script.src = "./js/main.js";
    document.body.appendChild(script);

    script.src = "./assets/bootstrap/js/bootstrap.bundle.min.js";
    document.body.appendChild(script);

    script.src = "assets/slick/slick.min.js";
    document.body.appendChild(script);

    script.src = "assets/niceselectpicker/jquery.nice-select.min.js";
    document.body.appendChild(script);

    script.src = "assets/wow/wow.min.js";
    document.body.appendChild(script);

    // script.src =
    //   "assets/mcustomscrollbar/jquery.mCustomScrollbar.concat.min.js";
    // document.body.appendChild(script);

    script.src = "assets/counterup/jquery.waypoints.min.js";
    document.body.appendChild(script);

    script.src = "assets/counterup/jquery.counterup.min.js";
    document.body.appendChild(script);

    script.src = "https://unpkg.com/ionicons@5.4.0/dist/ionicons.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="body_wrapper">
        <div className="click_capture"></div>
        <nav className="navbar navbar-expand-lg menu_one sticky-nav d-none d-lg-block">
          <div className="container">
            <a className="navbar-brand header_logo" href="index.html">
              <img
                className="first_logo sticky_logo"
                src={require("./img/logo.png")}
                srcset="./img/logo-2x.png 2x"
                alt="logo"
              />
              <img
                className="white_logo main_logo"
                src={require("./img/logo-w.png")}
                srcset="./img/logo-w2x.png 2x"
                alt="logo"
              />
            </a>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav menu ms-auto">
                <li className="nav-item dropdown submenu active">
                  <a href="index.html" className="nav-link dropdown-toggle">
                    Home
                  </a>
                  <i
                    className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                    aria-hidden="false"
                    data-bs-toggle="dropdown"
                  ></i>
                  <ul className="dropdown-menu">
                    <li className="nav-item active">
                      <a href="index.html" className="nav-link">
                        Demo 01
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-2.html" className="nav-link">
                        Demo 02
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-3.html" className="nav-link">
                        Demo 03
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-4.html" className="nav-link">
                        Demo 04
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-5.html" className="nav-link">
                        Demo 05
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown submenu">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Pages
                  </a>
                  <i
                    className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                    aria-hidden="false"
                    data-bs-toggle="dropdown"
                  ></i>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a
                        href="Layout_Header-Search-1.html"
                        className="nav-link"
                      >
                        Header Layout 01
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="Layout_Header-Search-2.html"
                        className="nav-link"
                      >
                        Header Layout 02
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="contact.html" className="nav-link">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="typography.html" className="nav-link">
                        Typography
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="404-error.html" className="nav-link">
                        404 Error
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown submenu">
                  <a
                    className="nav-link dropdown-toggle"
                    href="forums.html"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Forum
                  </a>
                  <i
                    className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                    aria-hidden="false"
                    data-bs-toggle="dropdown"
                  ></i>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="forums.html" className="nav-link">
                        Forums Root
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="forum-topics.html" className="nav-link">
                        Forum Topics
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="forum-topics-2.html" className="nav-link">
                        Forum Topics Two
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="forum-single.html" className="nav-link">
                        Topic Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="forum-profile.html" className="nav-link">
                        User Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="add-question.html" className="nav-link">
                        Add Question
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="user-list.html" className="nav-link">
                        User List
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="user-details.html" className="nav-link">
                        User Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="badges.html" className="nav-link">
                        User Badges
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown submenu">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Blog
                  </a>
                  <i
                    className="arrow_carrot-down_alt2 mobile_dropdown_icon"
                    aria-hidden="false"
                    data-bs-toggle="dropdown"
                  ></i>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="blog-grid.html" className="nav-link">
                        Blog Grid
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="blog-grid-two.html" className="nav-link">
                        Blog Grid Two
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="blog-list.html" className="nav-link">
                        Blog List
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="blog-single.html" className="nav-link">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="right-nav">
                <a
                  className="action_btn btn_small_two btn-text-medium round-btn-2"
                  href="#"
                >
                  Sign In
                </a>
                <div className="px-2 js-darkmode-btn" title="Toggle dark mode">
                  <label for="something" className="tab-btn tab-btns">
                    <IonIcon name="moon"></IonIcon>
                  </label>
                  <label for="something" className="tab-btn">
                    <IonIcon name="sunny"></IonIcon>
                  </label>
                  <label className="ball" for="something"></label>
                  <input
                    type="checkbox"
                    name="something"
                    id="something"
                    className="dark_mode_switcher"
                  />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="mobile_main_menu sticky-nav menu_one">
          <div className="container">
            <div className="mobile_menu_left">
              <button type="button" className="navbar-toggler mobile_menu_btn">
                <span className="menu_toggle">
                  <span className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </span>
              </button>
              <a className="navbar-brand header_logo" href="index.html">
                <img
                  className="sticky_logo"
                  src={require("./img/logo.png").default}
                  srcset="./img/logo-2x.png 2x"
                  alt="logo"
                />
                <img
                  className="main_logo white_logo"
                  src={require("./img/logo-w.png").default}
                  srcset="./img/logo-w2x.png 2x"
                  alt="logo"
                />
              </a>
            </div>
            <div className="mobile_menu_right">
              <div className="right-nav">
                <div className="px-2 js-darkmode-btn" title="Toggle dark mode">
                  <label for="something2" className="tab-btn tab-btns">
                    <IonIcon name="moon"></IonIcon>
                  </label>
                  <label for="something2" className="tab-btn">
                    <IonIcon name="sunny"></IonIcon>
                  </label>
                  <label className="ball" for="something2"></label>
                  <input
                    type="checkbox"
                    name="something2"
                    id="something2"
                    className="dark_mode_switcher"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="side_menu">
          <div className="mobile_menu_header">
            <div className="close_nav">
              <i className="icon_close"></i>
            </div>
            <div className="mobile_logo">
              <a className="navbar-brand header_logo me-0" href="index.html">
                <img
                  className="sticky_logo main_logo"
                  src={require("./img/logo.png").default}
                  srcset="./img/logo-2x.png 2x"
                  alt="logo"
                />
                <img
                  className="white_logo"
                  src={require("./img/logo-w.png").default}
                  srcset="./img/logo-w2x.png 2x"
                  alt="logo"
                />
              </a>
            </div>
          </div>
          <div className="mobile_nav_wrapper">
            <nav className="mobile_nav_top">
              <ul className="navbar-nav menu ms-auto">
                <li className="nav-item dropdown submenu active">
                  <a href="index.html" className="nav-link dropdown-toggle">
                    Home
                  </a>
                  <i className="arrow_carrot-down_alt2 mobile_dropdown_icon"></i>
                  <ul className="dropdown-menu">
                    <li className="nav-item active">
                      <a href="index.html" className="nav-link">
                        Demo 01
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-2.html" className="nav-link">
                        Demo 02
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-3.html" className="nav-link">
                        Demo 03
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-4.html" className="nav-link">
                        Demo 04
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="index-5.html" className="nav-link">
                        Demo 05
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown submenu">
                  <a className="nav-link dropdown-toggle" href="#">
                    {" "}
                    Pages{" "}
                  </a>
                  <i className="arrow_carrot-down_alt2 mobile_dropdown_icon"></i>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a
                        href="Layout_Header-Search-1.html"
                        className="nav-link"
                      >
                        Header Layout 01
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="Layout_Header-Search-2.html"
                        className="nav-link"
                      >
                        Header Layout 02
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="contact.html" className="nav-link">
                        Contact
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="typography.html" className="nav-link">
                        Typography
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="404-error.html" className="nav-link">
                        404 Error
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown submenu">
                  <a className="nav-link dropdown-toggle" href="forums.html">
                    Forum
                  </a>
                  <i className="arrow_carrot-down_alt2 mobile_dropdown_icon"></i>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="forums.html" className="nav-link">
                        Forums Root
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="forum-topics.html" className="nav-link">
                        Forum Topics
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="forum-topics-2.html" className="nav-link">
                        Forum Topics Two
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="forum-single.html" className="nav-link">
                        Topic Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="forum-profile.html" className="nav-link">
                        User Profile
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="add-question.html" className="nav-link">
                        Add Question
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="user-list.html" className="nav-link">
                        User List
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="user-details.html" className="nav-link">
                        User Details
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="badges.html" className="nav-link">
                        User Badges
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown submenu">
                  <a className="nav-link dropdown-toggle" href="#">
                    {" "}
                    Blog{" "}
                  </a>
                  <i className="arrow_carrot-down_alt2 mobile_dropdown_icon"></i>
                  <ul className="dropdown-menu">
                    <li className="nav-item">
                      <a href="blog-grid.html" className="nav-link">
                        Blog Grid
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="blog-grid-two.html" className="nav-link">
                        Blog Grid Two
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="blog-list.html" className="nav-link">
                        Blog List
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="blog-single.html" className="nav-link">
                        Blog Details
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <section className="banner-area-3 has_search">
          <div className="banner-shapes">
            <div className="shape">
              <img
                data-parallax='{"x": -60, "y": 0}'
                src={require("./img/home_two/banner-shape-1.png")}
                alt="shape"
              />
            </div>
            <div className="shape">
              <img
                data-parallax='{"x": -20, "y": 0}'
                src={require("./img/home_two/banner-shape-2.png")}
                alt="shape"
              />
            </div>
            <div className="shape">
              <img
                data-parallax='{"x": 60, "y": 0}'
                src={require("./img/home_two/banner-shape-3.png")}
                alt="shape"
              />
            </div>
            <div className="shape">
              <img
                data-parallax='{"x": 40, "y": 0}'
                src={require("./img/home_two/banner-shape-4.png")}
                alt="shape"
              />
            </div>
            <div className="shape">
              <img
                data-parallax='{"x": 200, "y": 90, "rotateY":700}'
                src={require("./img/home_two/banner-shape-5.png")}
                alt="shape"
              />
            </div>
            <div className="shape">
              <img
                data-parallax='{"x": 200, "y": 70, "rotateZ":700}'
                src={require("./img/home_two/banner-shape-6.png")}
                alt="shape"
              />
            </div>
            <div className="shape">
              <img
                data-parallax='{"x": -150, "y": 90, "rotateZ":0}'
                src={require("./img/home_two/banner-shape-7.png")}
                alt="shape"
              />
            </div>
            <div className="shape">
              <img
                data-parallax='{"x": -200, "y": 90, "rotateX":700}'
                src={require("./img/home_two/banner-shape-8.png")}
                alt="shape"
              />
            </div>
            <div className="shape">
              <img
                data-parallax='{"x": -150, "y": 90, "rotateZ":0}'
                src={require("./img/home_two/banner-shape-9.png")}
                alt="shape"
              />
            </div>
            <div className="shape">
              <img
                data-parallax='{"x": -200, "y": 70, "rotateX":700}'
                src={require("./img/home_two/banner-shape-10.png")}
                alt="shape"
              />
            </div>
          </div>
          <div className="container">
            <div className="row doc_banner_content">
              <div className="col-12 px-0">
                <h1 className="banner-title-h1">Welcome to Best Coding Blog</h1>
                <p className="banner-text-p">
                  Where you can find answers for every question and solution for
                  every coding problem.
                </p>
              </div>
              <div className="col-lg-8 mx-auto">
                <div className="banner-search-box mt-40">
                  <form action="#">
                    <div className="input-wrapper">
                      <input
                        placeholder="Search your forum of topic here..."
                        type="search"
                        id="searchbox"
                        autocomplete="off"
                        name="search"
                      />
                      <button type="submit" className="search-btn">
                        Search
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="forum-statistics">
          <div className="container">
            <div className="row align-items-center gy-lg-0 gy-4">
              <div className="col-lg-8">
                <div className="row gy-4 gy-sm-0">
                  <div className="col-sm-4">
                    <div className="statistics-widget wow fadeInRight justify-content-center justify-content-sm-start">
                      <img
                        src={require("./img/home_two/icon-1.svg").default}
                        alt="icon"
                      />
                      <div>
                        <h4>
                          <span className="counter d-inline-block">1099</span>+
                        </h4>
                        <p>members</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div
                      className="statistics-widget wow fadeInRight justify-content-center justify-content-sm-start"
                      data-wow-delay="0.3s"
                    >
                      <img
                        src={require("./img/home_two/icon-2.svg").default}
                        alt="icon"
                      />
                      <div>
                        <h4 className="counter">5099</h4>
                        <p>posts</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div
                      className="statistics-widget wow fadeInRight justify-content-center justify-content-sm-start"
                      data-wow-delay="0.6s"
                    >
                      <img
                        src={require("./img/home_two/icon-3.svg").default}
                        alt="icon"
                      />
                      <div>
                        <h4 className="counter">255</h4>
                        <p>online</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="col-lg-4 text-lg-end text-center wow fadeInLeft"
                data-wow-delay="0.3s"
              >
                <a className="action_btn btn_bg round-btn" href="#">
                  Start a Discussion
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="community-area bg-disable">
          <div className="container">
            <div className="d-flex justify-content-between mb-35 flex-wrap">
              <h2 className="section-title-h2 mb-0">Community</h2>
              <div>
                <a
                  href="#"
                  className="doc_border_btn doc_border_btn_two sec-btn-blue mt-2"
                >
                  New Post
                </a>
              </div>
            </div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home"
                  type="button"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  Show topics
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile"
                  type="button"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Show all posts
                </button>
              </li>
            </ul>
            <div className="tab-content mt-30" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row gy-4 justify-content-center">
                  <div className="col-md-6 col-lg-4">
                    <div className="community-topic-widget-box wow fadeInUp">
                      <img
                        src={require("./img/home_two/lightbulb.svg").default}
                        alt="icon"
                      />
                      <div className="box-content">
                        <a href="#">
                          <h5>Knowledge Base</h5>
                        </a>
                        <span>155 posts</span>
                        <span className="vr-line">|</span>
                        <span>21 followers</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div
                      className="community-topic-widget-box wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <img
                        src={require("./img/home_two/project.svg").default}
                        alt="icon"
                      />
                      <div className="box-content">
                        <a href="#">
                          <h5>Getting Started</h5>
                        </a>
                        <span>155 posts</span>
                        <span className="vr-line">|</span>
                        <span>21 followers</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div
                      className="community-topic-widget-box wow fadeInUp"
                      data-wow-delay="0.7s"
                    >
                      <img
                        src={require("./img/home_two/team.svg").default}
                        alt="icon"
                      />
                      <div className="box-content">
                        <a href="#">
                          <h5>Team Hiring</h5>
                        </a>
                        <span>155 posts</span>
                        <span className="vr-line">|</span>
                        <span>21 followers</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="community-topic-widget-box wow fadeInUp">
                      <img
                        src={require("./img/home_two/coding.svg").default}
                        alt="icon"
                      />
                      <div className="box-content">
                        <a href="#">
                          <h5>Web and Code</h5>
                        </a>
                        <span>155 posts</span>
                        <span className="vr-line">|</span>
                        <span>21 followers</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div
                      className="community-topic-widget-box wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <img
                        src={require("./img/home_two/add.svg").default}
                        alt="icon"
                      />
                      <div className="box-content">
                        <a href="#">
                          <h5>Join a Group</h5>
                        </a>
                        <span>155 posts</span>
                        <span className="vr-line">|</span>
                        <span>21 followers</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div
                      className="community-topic-widget-box wow fadeInUp"
                      data-wow-delay="0.7s"
                    >
                      <img
                        src={require("./img/home_two/leadership.svg").default}
                        alt="icon"
                      />
                      <div className="box-content">
                        <a href="#">
                          <h5>Be a Leader</h5>
                        </a>
                        <span>155 posts</span>
                        <span className="vr-line">|</span>
                        <span>21 followers</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div className="community-topic-widget-box wow fadeInUp">
                      <img
                        src={require("./img/home_two/faq.svg").default}
                        alt="icon"
                      />
                      <div className="box-content">
                        <a href="#">
                          <h5>Help from</h5>
                        </a>
                        <span>155 posts</span>
                        <span className="vr-line">|</span>
                        <span>21 followers</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div
                      className="community-topic-widget-box wow fadeInUp"
                      data-wow-delay="0.3s"
                    >
                      <img
                        src={require("./img/home_two/link.svg").default}
                        alt="icon"
                      />
                      <div className="box-content">
                        <a href="#">
                          <h5>API Reference</h5>
                        </a>
                        <span>155 posts</span>
                        <span className="vr-line">|</span>
                        <span>21 followers</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4">
                    <div
                      className="community-topic-widget-box wow fadeInUp"
                      data-wow-delay="0.7s"
                    >
                      <img
                        src={require("./img/home_two/dashboard.svg").default}
                        alt="icon"
                      />
                      <div className="box-content">
                        <a href="#">
                          <h5>Master Layout</h5>
                        </a>
                        <span>155 posts</span>
                        <span className="vr-line">|</span>
                        <span>21 followers</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-5 mx-auto">
                    <a
                      href="#"
                      className="dbl-arrow-upper show-more-btn show-more-round w-100 mt-70 wow fadeInUp"
                    >
                      <div className="arrow-cont">
                        <i className="arrow_carrot-down first"></i>
                        <i className="arrow_carrot-down second"></i>
                      </div>
                      Show More
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="single-forum-post-widget wow fadeInUp">
                  <div className="post-content">
                    <div className="post-title">
                      <h6>
                        <a href="#">
                          This forum is a special forum for general
                          announcements.
                        </a>
                        <span>
                          <i className="icon_check_alt2"></i>
                        </span>
                      </h6>
                    </div>
                    <div className="post-info">
                      <div className="author">
                        <img
                          src={require("./img/user-circle-alt.svg").default}
                          alt="icon"
                        />
                        Zain Siphron
                      </div>

                      <div className="post-time">
                        <img
                          src={require("./img/time-outline.svg").default}
                          alt=""
                        />
                        10 min ago
                      </div>
                      <div className="post-category">
                        <a href="#">
                          <img
                            src={
                              require("./img/home_three/forum-catagory-02.svg")
                                .default
                            }
                            alt=""
                          />
                          Announcements
                        </a>
                      </div>
                    </div>
                    <div className="post-tags">
                      <div className="single-tag tag-jq">jQuery</div>
                      <div className="single-tag tag-php">Php</div>
                    </div>
                  </div>
                  <div className="post-reach">
                    <div className="post-view">
                      <img
                        src={require("./img/forum/eye-outline.svg").default}
                        alt="icon"
                      />
                      591 Views
                    </div>
                    <div className="post-like">
                      <img
                        src={
                          require("./img/forum/thumbs-up-outline.svg").default
                        }
                        alt="icon"
                      />
                      250 Likes
                    </div>
                    <div className="post-comment">
                      <img
                        src={
                          require("./img/forum/chatbubbles-outline.svg").default
                        }
                        alt="icon"
                      />
                      155 Replies
                    </div>
                  </div>
                </div>
                <div
                  className="single-forum-post-widget wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="post-content">
                    <div className="post-title">
                      <h6>
                        <a href="#">Welcome to the Cosplayers Group Forum!</a>
                      </h6>
                    </div>
                    <div className="post-info">
                      <div className="author">
                        <img
                          src={require("./img/user-circle-alt.svg").default}
                          alt="icon"
                        />
                        Zain Siphron
                      </div>

                      <div className="post-time">
                        <img
                          src={require("./img/time-outline.svg").default}
                          alt=""
                        />
                        10 min ago
                      </div>
                      <div className="post-category">
                        <a href="#">
                          <img
                            src={
                              require("./img/home_three/forum-catagory-01.svg")
                                .default
                            }
                            alt=""
                          />
                          Getting started
                        </a>
                      </div>
                    </div>
                    <div className="post-tags">
                      <div className="single-tag tag-wp">WordPress</div>
                      <div className="single-tag tag-php">Php</div>
                    </div>
                  </div>
                  <div className="post-reach">
                    <div className="post-view">
                      <img
                        src={require("./img/forum/eye-outline.svg").default}
                        alt="icon"
                      />
                      591 Views
                    </div>
                    <div className="post-like">
                      <img
                        src={
                          require("./img/forum/thumbs-up-outline.svg").default
                        }
                        alt="icon"
                      />
                      250 Likes
                    </div>
                    <div className="post-comment">
                      <img
                        src={
                          require("./img/forum/chatbubbles-outline.svg").default
                        }
                        alt="icon"
                      />
                      155 Replies
                    </div>
                  </div>
                </div>
                <div
                  className="single-forum-post-widget wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="post-content">
                    <div className="post-title">
                      <h6>
                        <a href="#">How i can set non-scroll area in Ama?.</a>
                        <span>
                          <i className="icon_check_alt2"></i>
                        </span>
                      </h6>
                    </div>
                    <div className="post-info">
                      <div className="author">
                        <img
                          src={require("./img/user-circle-alt.svg").default}
                          alt="icon"
                        />
                        Zain Siphron
                      </div>

                      <div className="post-time">
                        <img
                          src={require("./img/time-outline.svg").default}
                          alt=""
                        />
                        10 min ago
                      </div>
                      <div className="post-category">
                        <a href="#">
                          <img
                            src={
                              require("./img/home_three/forum-catagory-04.svg")
                                .default
                            }
                            alt=""
                          />
                          Customers
                        </a>
                      </div>
                    </div>
                    <div className="post-tags">
                      <div className="single-tag tag-js">JavaScript</div>
                      <div className="single-tag tag-php">Php</div>
                    </div>
                  </div>
                  <div className="post-reach">
                    <div className="post-view">
                      <img
                        src={require("./img/forum/eye-outline.svg").default}
                        alt="icon"
                      />
                      591 Views
                    </div>
                    <div className="post-like">
                      <img
                        src={
                          require("./img/forum/thumbs-up-outline.svg").default
                        }
                        alt="icon"
                      />
                      250 Likes
                    </div>
                    <div className="post-comment">
                      <img
                        src={
                          require("./img/forum/chatbubbles-outline.svg").default
                        }
                        alt="icon"
                      />
                      155 Replies
                    </div>
                  </div>
                </div>
                <div
                  className="single-forum-post-widget wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="post-content">
                    <div className="post-title">
                      <h6>
                        <a href="#">Join Ama Discord Community!</a>
                      </h6>
                    </div>
                    <div className="post-info">
                      <div className="author">
                        <img
                          src={require("./img/user-circle-alt.svg").default}
                          alt="icon"
                        />
                        Zain Siphron
                      </div>

                      <div className="post-time">
                        <img
                          src={require("./img/time-outline.svg").default}
                          alt=""
                        />
                        10 min ago
                      </div>
                      <div className="post-category">
                        <a href="#">
                          <img
                            src={
                              require("./img/home_three/forum-catagory-02.svg")
                                .default
                            }
                            alt=""
                          />
                          Announcements
                        </a>
                      </div>
                    </div>
                    <div className="post-tags">
                      <div className="single-tag tag-dvlp">Development</div>
                    </div>
                  </div>
                  <div className="post-reach">
                    <div className="post-view">
                      <img
                        src={require("./img/forum/eye-outline.svg").default}
                        alt="icon"
                      />
                      591 Views
                    </div>
                    <div className="post-like">
                      <img
                        src={
                          require("./img/forum/thumbs-up-outline.svg").default
                        }
                        alt="icon"
                      />
                      250 Likes
                    </div>
                    <div className="post-comment">
                      <img
                        src={
                          require("./img/forum/chatbubbles-outline.svg").default
                        }
                        alt="icon"
                      />
                      155 Replies
                    </div>
                  </div>
                </div>
                <div
                  className="single-forum-post-widget wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="post-content">
                    <div className="post-title">
                      <h6>
                        <a href="#">What is the latest version of jQuery ?</a>
                      </h6>
                    </div>
                    <div className="post-info">
                      <div className="author">
                        <img
                          src={require("./img/user-circle-alt.svg").default}
                          alt="icon"
                        />
                        Zain Siphron
                      </div>

                      <div className="post-time">
                        <img
                          src={require("./img/time-outline.svg").default}
                          alt=""
                        />
                        10 min ago
                      </div>
                      <div className="post-category">
                        <a href="#">
                          <img
                            src={
                              require("./img/home_three/forum-catagory-02.svg")
                                .default
                            }
                            alt=""
                          />
                          Announcements
                        </a>
                      </div>
                    </div>
                    <div className="post-tags">
                      <div className="single-tag tag-jq">jQuery</div>
                      <div className="single-tag tag-php">Php</div>
                    </div>
                  </div>
                  <div className="post-reach">
                    <div className="post-view">
                      <img
                        src={require("./img/forum/eye-outline.svg").default}
                        alt="icon"
                      />
                      591 Views
                    </div>
                    <div className="post-like">
                      <img
                        src={
                          require("./img/forum/thumbs-up-outline.svg").default
                        }
                        alt="icon"
                      />
                      250 Likes
                    </div>
                    <div className="post-comment">
                      <img
                        src={
                          require("./img/forum/chatbubbles-outline.svg").default
                        }
                        alt="icon"
                      />
                      155 Replies
                    </div>
                  </div>
                </div>
                <div
                  className="single-forum-post-widget wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="post-content">
                    <div className="post-title">
                      <h6>
                        <a href="#">
                          Any tips on how to improve in the future?
                        </a>
                      </h6>
                    </div>
                    <div className="post-info">
                      <div className="author">
                        <img
                          src={require("./img/user-circle-alt.svg").default}
                          alt="icon"
                        />
                        Zain Siphron
                      </div>

                      <div className="post-time">
                        <img
                          src={require("./img/time-outline.svg").default}
                          alt=""
                        />
                        10 min ago
                      </div>
                      <div className="post-category">
                        <a href="#">
                          <img
                            src={
                              require("./img/home_three/forum-catagory-04.svg")
                                .default
                            }
                            alt=""
                          />
                          Customers
                        </a>
                      </div>
                    </div>
                    <div className="post-tags">
                      <div className="single-tag tag-ecmrc">ecommerce</div>
                    </div>
                  </div>
                  <div className="post-reach">
                    <div className="post-view">
                      <img
                        src={require("./img/forum/eye-outline.svg").default}
                        alt="icon"
                      />
                      591 Views
                    </div>
                    <div className="post-like">
                      <img
                        src={
                          require("./img/forum/thumbs-up-outline.svg").default
                        }
                        alt="icon"
                      />
                      250 Likes
                    </div>
                    <div className="post-comment">
                      <img
                        src={
                          require("./img/forum/chatbubbles-outline.svg").default
                        }
                        alt="icon"
                      />
                      155 Replies
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm-5 mx-auto">
                    <a
                      href="#"
                      className="dbl-arrow-upper show-more-btn show-more-round w-100 mt-70 wow fadeInUp"
                    >
                      <div className="arrow-cont">
                        <i className="arrow_carrot-down first"></i>
                        <i className="arrow_carrot-down second"></i>
                      </div>
                      Show More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature-one">
          <div className="container">
            <div className="row align-items-center gy-4 gy-lg-0">
              <div className="col-lg-6 text-center text-lg-start">
                <div className="img-content">
                  <img
                    className="wow fadeInRight"
                    data-wow-delay="0.1s"
                    src={require("./img/home_two/Post.png")}
                    alt="post"
                  />
                  <img
                    className="wow fadeInLeft"
                    data-wow-delay="0.2s"
                    src={require("./img/home_two/Comment.png")}
                    alt="comment"
                  />
                  <img
                    className="bg-img"
                    src={require("./img/home_two/post-vaiation-bg.png")}
                    alt="bg img"
                  />
                  <img
                    src={require("./img/home_two/Subtract.png")}
                    alt="shape"
                  />
                  <img
                    src={require("./img/home_two/scribbles-scribbles-62.png")}
                    alt="shape"
                  />
                  <img
                    src={require("./img/home_two/scribbles-scribbles-2.png")}
                    alt="shape"
                  />
                </div>
              </div>
              <div className="col-lg-6 ps-lg-5">
                <div className="feature-content-text wow fadeInLeft mt-4 mt-xl-0">
                  <h2>Discover a great collection of post variations</h2>
                  <p>
                    The Forum activity allows students and teachers to exchange
                    ideas by posting comments as part of a 'thread'. Files such
                    as images and media maybe included in forum posts. The
                    teacher can choose to grade and/or rate forum posts and it
                    is also possible to give students permission to rate each
                    others' posts.
                  </p>
                  <hr />
                  <h5>This is an incredible Forum</h5>
                  <a href="#" className="dbl-arrow">
                    <div className="arrow-cont">
                      <i className="arrow_carrot-right first"></i>
                      <i className="arrow_carrot-right second"></i>
                    </div>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature-two">
          <div className="container">
            <div className="row align-items-center gy-4 gy-lg-0">
              <div className="col-lg-6 order-lg-2 ps-lg-4 text-center text-lg-start offset-xl-1">
                <div className="img-content wow fadeInLeft">
                  <img
                    className="img-fluid"
                    src={
                      require("./img/home_two/daily-notification.png").default
                    }
                    alt="post"
                  />
                  <img
                    src={
                      require("./img/home_two/scribbles-scribbles-43.png")
                        .default
                    }
                    alt="shape"
                  />
                  <img
                    className="bg-img"
                    src={
                      require("./img/home_two/daily-notification-bg.png")
                        .default
                    }
                    alt="bg"
                  />
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 pe-xl-0 order-lg-1">
                <div className="feature-content-text wow fadeInRight mt-4 mt-xl-0">
                  <h2>Activate daily notifications and never miss a thing</h2>
                  <p>
                    Please make sure you read the forum guidelines and
                    Frequently Asked Questions before contributing to WordPress
                    support, both when asking for and giving support, this helps
                    maintain a friendly and welcoming atmosphere for all
                    involved. I asked this writer for a guest post, which he
                    seemed happy to write for me.
                  </p>
                  <hr />
                  <h5>Interested in our network?</h5>
                  <a href="#" className="dbl-arrow">
                    <div className="arrow-cont">
                      <i className="arrow_carrot-right first"></i>
                      <i className="arrow_carrot-right second"></i>
                    </div>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="call-to-action cta-bg-2">
          <div className="bg-shapes">
            <div className="shape">
              <img
                src={require("./img/home_two/cta-bg-1.png").default}
                alt=""
              />
            </div>
            <div className="shape">
              <img
                src={require("./img/home_two/cta-bg-2.png").default}
                alt=""
              />
            </div>
          </div>
          <div className="container">
            <div className="row action-content-wrapper gy-lg-0 gy-4">
              <div className="col-lg-7 px-lg-0 text-lg-start text-center">
                <div className="action-title-wrap title-img justify-content-lg-start justify-content-center">
                  <h2 className="action-title title-2">
                    Build your Connection
                  </h2>
                </div>
                <p className="mb-0">
                  connect with over 1 million cconstrustion professionals.
                  Supports can be either at the end or at any intermediate point
                  along a struuctural member or a constituent part.
                </p>
              </div>
              <div className="col-lg-5 text-lg-end text-center">
                <a href="#" className="action_btn">
                  <i className="icon_group"></i> Join Community
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="latest-news-area bg-disable">
          <div className="container">
            <h2 className="section-title-h2 text-center mb-0 wow fadeInUp">
              Latest News
            </h2>

            <div className="news-slider">
              <div className="single-news-widget wow fadeInUp">
                <div className="img-content">
                  <img
                    src={require("./img/home_two/news-1.png").default}
                    alt=""
                  />
                </div>
                <div className="news-content">
                  <h5>
                    <a href="#">Why communication between design teams</a>
                  </h5>
                  <p>
                    Talking to other design teams needs to happen more often.
                    Here's how we approach these discussions
                  </p>
                  <div className="author">
                    <div>
                      <img
                        src={
                          require("./img/home_two/person-outline.svg").default
                        }
                        alt="icon"
                      />
                      Spider Themes
                    </div>
                    <div>
                      <img
                        src={
                          require("./img/home_two/calendar-outline.svg").default
                        }
                        alt="icon"
                      />
                      March 18, 2021
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="single-news-widget wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="img-content">
                  <img
                    src={require("./img/home_two/news-2.png").default}
                    alt=""
                  />
                </div>
                <div className="news-content">
                  <h5>
                    <a href="blog-single.html">
                      How to free up space in your Ama account
                    </a>
                  </h5>
                  <p>
                    I've unshared many files, permanently deleted lots of files
                    but dropbox still that it is full. How can I free up space?
                  </p>
                  <div className="author">
                    <div>
                      <img
                        src={
                          require("./img/home_two/person-outline.svg").default
                        }
                        alt="icon"
                      />
                      Spider Themes
                    </div>
                    <div>
                      <img
                        src={
                          require("./img/home_two/calendar-outline.svg").default
                        }
                        alt="icon"
                      />
                      March 18, 2021
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="single-news-widget wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="img-content">
                  <img
                    src={require("./img/home_two/news-1.png").default}
                    alt=""
                  />
                </div>
                <div className="news-content">
                  <h5>
                    <a href="blog-single.html">
                      How to build a workplace that attracts
                    </a>
                  </h5>
                  <p>
                    Learn about leading and empowering diverse teams and
                    inclusive workplaces from Ama Black affinity group.
                  </p>
                  <div className="author">
                    <div>
                      <img
                        src={
                          require("./img/home_two/person-outline.svg").default
                        }
                        alt="icon"
                      />
                      Spider Themes
                    </div>
                    <div>
                      <img
                        src={
                          require("./img/home_two/calendar-outline.svg").default
                        }
                        alt="icon"
                      />
                      March 18, 2021
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="single-news-widget wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="img-content">
                  <img
                    src={require("./img/home_two/news-1.png").default}
                    alt=""
                  />
                </div>
                <div className="news-content">
                  <h5>
                    <a href="blog-single.html">
                      Why communication between design teams
                    </a>
                  </h5>
                  <p>
                    Talking to other design teams needs to happen more often.
                    Here’s how we approach these discussions
                  </p>
                  <div className="author">
                    <div>
                      <img
                        src={
                          require("./img/home_two/person-outline.svg").default
                        }
                        alt="icon"
                      />
                      Spider Themes
                    </div>
                    <div>
                      <img
                        src={
                          require("./img/home_two/calendar-outline.svg").default
                        }
                        alt="icon"
                      />
                      March 18, 2021
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="single-news-widget wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="img-content">
                  <img
                    src={require("./img/home_two/news-2.png").default}
                    alt=""
                  />
                </div>
                <div className="news-content">
                  <h5>
                    <a href="blog-single.html">
                      How to free up space in your Ama account
                    </a>
                  </h5>
                  <p>
                    I've unshared many files, permanently deleted lots of files
                    but dropbox still that it is full. How can I free up space?
                  </p>
                  <div className="author">
                    <div>
                      <img
                        src={
                          require("./img/home_two/person-outline.svg").default
                        }
                        alt="icon"
                      />
                      Spider Themes
                    </div>
                    <div>
                      <img
                        src={
                          require("./img/home_two/calendar-outline.svg").default
                        }
                        alt="icon"
                      />
                      March 18, 2021
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="single-news-widget wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="img-content">
                  <img
                    src={require("./img/home_two/news-1.png").default}
                    alt=""
                  />
                </div>
                <div className="news-content">
                  <h5>
                    <a href="blog-single.html">
                      How to build a workplace that attracts
                    </a>
                  </h5>
                  <p>
                    Learn about leading and empowering diverse teams and
                    inclusive workplaces from Ama Black affinity group.
                  </p>
                  <div className="author">
                    <div>
                      <img
                        src={
                          require("./img/home_two/person-outline.svg").default
                        }
                        alt="icon"
                      />
                      Spider Themes
                    </div>
                    <div>
                      <img
                        src={
                          require("./img/home_two/calendar-outline.svg").default
                        }
                        alt="icon"
                      />
                      March 18, 2021
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="single-news-widget wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="img-content">
                  <img
                    src={require("./img/home_two/news-1.png").default}
                    alt=""
                  />
                </div>
                <div className="news-content">
                  <h5>
                    <a href="blog-single.html">
                      Why communication between design teams
                    </a>
                  </h5>
                  <p>
                    Talking to other design teams needs to happen more often.
                    Here’s how we approach these discussions
                  </p>
                  <div className="author">
                    <div>
                      <img
                        src={
                          require("./img/home_two/person-outline.svg").default
                        }
                        alt="icon"
                      />
                      Spider Themes
                    </div>
                    <div>
                      <img
                        src={
                          require("./img/home_two/calendar-outline.svg").default
                        }
                        alt="icon"
                      />
                      March 18, 2021
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="single-news-widget wow fadeInUp"
                data-wow-delay="0.9s"
              >
                <div className="img-content">
                  <img
                    src={require("./img/home_two/news-2.png").default}
                    alt=""
                  />
                </div>
                <div className="news-content">
                  <h5>
                    <a href="blog-single.html">
                      How to free up space in your Ama account
                    </a>
                  </h5>
                  <p>
                    I've unshared many files, permanently deleted lots of files
                    but dropbox still that it is full. How can I free up space?
                  </p>
                  <div className="author">
                    <div>
                      <img
                        src={
                          require("./img/home_two/person-outline.svg").default
                        }
                        alt="icon"
                      />
                      Spider Themes
                    </div>
                    <div>
                      <img
                        src={
                          require("./img/home_two/calendar-outline.svg").default
                        }
                        alt="icon"
                      />
                      March 18, 2021
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="single-news-widget wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="img-content">
                  <img
                    src={require("./img/home_two/news-1.png").default}
                    alt=""
                  />
                </div>
                <div className="news-content">
                  <h5>
                    <a href="blog-single.html">
                      How to build a workplace that attracts
                    </a>
                  </h5>
                  <p>
                    Learn about leading and empowering diverse teams and
                    inclusive workplaces from Ama Black affinity group.
                  </p>
                  <div className="author">
                    <div>
                      <img
                        src={
                          require("./img/home_two/person-outline.svg").default
                        }
                        alt="icon"
                      />
                      Spider Themes
                    </div>
                    <div>
                      <img
                        src={
                          require("./img/home_two/calendar-outline.svg").default
                        }
                        alt="icon"
                      />
                      March 18, 2021
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footer-3">
          <div className="footer-shapes">
            <div className="shape">
              <img
                className="wow fadeInLeft"
                data-wow-delay="0.5s"
                src={require("./img/footer/shape-1.png").default}
                alt=""
              />
            </div>
            <div className="shape">
              <img src={require("./img/footer/shape-2.png").default} alt="" />
            </div>
          </div>
          <div className="container">
            <div className="footer-top pt-105 pb-120">
              <div className="row gy-lg-0 gy-4">
                <div className="col-lg-4 col-sm-6 wow fadeInLeft">
                  <div className="footer-widget pr-20">
                    <a href="#">
                      {" "}
                      <img
                        src={require("./img/logo-w.png").default}
                        alt="logo"
                      />
                    </a>
                    <p className="f-text mt-55">Join with your email address</p>
                    <div className="footer-sub-form-2">
                      <form action="#">
                        <div className="form-inp-container">
                          <input type="text" placeholder="email@example.com" />
                          <button className="action_btn" type="submit">
                            Join Now
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-2 ps-xl-4 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.3s"
                >
                  <div className="footer-widget ps-lg-5">
                    <h6 className="widget-title mb-4">Company</h6>
                    <ul className="link-list list-unstyled">
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Careers</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.5s"
                >
                  <div className="footer-widget pl-lg-90">
                    <h6 className="widget-title mb-4">Product</h6>
                    <ul className="link-list list-unstyled">
                      <li>
                        <a href="#">Designer</a>
                      </li>
                      <li>
                        <a href="#">Interactions</a>
                      </li>
                      <li>
                        <a href="#">CMS</a>
                      </li>
                      <li>
                        <a href="#">Ecommerce</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className="col-lg-3 col-sm-6 wow fadeInUp"
                  data-wow-delay="0.7s"
                >
                  <div className="footer-widget ps-lg-3">
                    <h6 className="widget-title mb-4">Get Help</h6>
                    <ul className="link-list list-unstyled">
                      <li>
                        <a href="#">Forum</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <a href="#">Community</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom pt-40 pb-40">
              <div className="d-flex justify-content-between flex-wrap">
                <p className="wow fadeInRight">
                  Copyright 2021, All Rights Reserved
                </p>
                <ul className="footer-menu list-unstyled wow fadeInLeft">
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Latest Projects</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <a id="back-to-top" title="Back to Top"></a>
    </>
  );
}

export default App;
