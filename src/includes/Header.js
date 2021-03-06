import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from '../components/Home'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Contact from '../components/Contact'
import Blog from '../components/Blog'
import BlogDetail from '../components/BlogDetail'

function Header() {
    return (
     <Router>
        <div>
            <div>
                {/* Preloader Start */}
                <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="preloader-circle" />
                            <div className="preloader-img pere-text">
                            <img src="assets/img/logo/loder.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Preloader Start */}
                <header>

                    {/* Header Start */}
                    <div className="header-area">
                        <div className="main-header  header-sticky">
                            <div className="container-fluid">
                            <div className="row align-items-center">
                                {/* Logo */}
                                <div className="col-xl-2 col-lg-2 col-md-1">
                                    <div className="logo">
                                        <a href="index.html"><img src="assets/img/logo/logo.png" alt="" /></a>
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-10 col-md-10">
                                    <div className="menu-main d-flex align-items-center justify-content-end">
                                        {/* Main-menu */}
                                        <div className="main-menu f-right d-none d-lg-block">
                                        <nav>
                                            <ul id="navigation">
                                                <li>
                                                <Link to="/">Home</Link>
                                                </li>
                                                <li>
                                                <Link to="/about">About</Link>
                                                </li>
                                                <li><Link to="/services">Services</Link></li>
                                                <li><Link to="/portfolio">Portfolio</Link></li>
                                                <li><Link to="/blog">Blog</Link></li>
                                                
                                                <li><Link to="/contact">Contact</Link></li>
                                            </ul>
                                        </nav>
                                        </div>
                                        <div className="header-right-btn f-right d-none d-xl-block ml-20">
                                        <a href="#" className="btn header-btn">Get Free Consultent</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Mobile Menu */}
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none" />
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        {/* Header End */}
                </header>

                <Switch>

                    <Route exact path="/" component={Home}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/services" component={Services}/>
                    <Route exact path="/portfolio" component={Portfolio}/>
                    <Route exact path="/contact" component={Contact}/>
                    <Route exact path="/blog" component={Blog}/>
                    <Route exact path="/blog-detail" component={BlogDetail}/>

                    

                </Switch>
            </div>
        </div>
     </Router>
    )
}

export default Header
