import React from 'react'
import { FaCartPlus, FaRobot, FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom/cjs/react-router-dom'

function Landing() {
    return (
        <React.Fragment>
            <header id="header" class="fixed-top d-flex align-items-center">
                <div class="container d-flex align-items-center">
                    <div class="logo me-auto">
                        <h1><a href="index.html">Floral Design</a></h1>
                    </div>
                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>
                            <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><Link to="/register" class="nav-link scrollto" href="#about">Register</Link></li>
                            <li><Link to="/login" class="nav-link scrollto" href="#contact">Login</Link></li>
                        </ul>
                        <i class="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                </div>
            </header>
            <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
                <div class="container text-center text-md-left" data-aos="fade-up">
                    <h1>Welcome to <span>Floral Design</span></h1>
                    <h2>Harmony in Bloom: Cultivating Creativity with AI-Powered Floral Designs</h2>
                </div>
            </section>
            <main id="main">
                <section id="what-we-do" class="what-we-do">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div class="icon-box">
                                    <div class="icon"><FaRobot size={50} color='gray' /></div>
                                    <h4><a>Assist AI </a></h4>
                                    <p>
                                    Enhancing creativity using AI: fostering innovation, inspiration, and novel perspectives for expansive creative endeavors.</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                <div class="icon-box">
                                    <div class="icon"><FaSearch  size={30}/></div>
                                    <h4><a >Search Product</a></h4>
                                    <p>You can search any design flowers from the flower shop </p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                <div class="icon-box">
                                    <div class="icon"><FaCartPlus size={30} /></div>
                                    <h4><a>Add Cart</a></h4>
                                    <p>Automate adding the product to the cart when a user selects a flower design from the options.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    )
}

export default Landing