import React, { Fragment } from 'react'
import { Carousel } from 'react-bootstrap'
import './Home.css'
import Rocket from '../SVG/Rocket.svg'
import Settings from '../SVG/Settings.svg'
import World from '../SVG/World.svg'
import Data from '../SVG/Data.svg'
const Home = () => {
    return (
        <Fragment>
            <div className="home">

                <div className="LessSection">
                    <div className="content">

                        <section>
                            <div className="container text-center ">
                                <h3>WHAT'S YOUR SEO SCORE</h3>
                                <h2>
                                    We are Full Service <br />
                                    <span className="topHeaderSpan"> SEO Agency</span>
                                </h2>
                                <div className="InputArea text-center" >
                                    <div className=" ">
                                        <input placeholder="Enter You Website URL" type="text" />
                                        <span className="SearchBarSpan">  | </span>
                                        <input placeholder="Enter Your Email" type="text" />
                                        <button className="startNowButton">Start Now</button>
                                    </div>
                                </div>
                                <div className="sectionBottom">
                                    <img src="http://templates.thememodern.com/onum/images/topimg-home1.png" alt="" />
                                </div>
                            </div>
                        </section>


                        <section>
                            <div className="secondSection">
                                <div className="container">
                                    <div className="row">

                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="card" >
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                        <img className="SvgCard" src={Rocket} alt="" />
                                                    </h5>
                                                    <h6 className="card-subtitle mb-2 ">Awesome Results</h6>
                                                    <p className="card-text">
                                                        We have seen great successes with everyone companies.
                                                      </p>
                                                    <a href="#"><button className="startNowButton">
                                                        Learn More
                                                    </button></a>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="card" >
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                        <img className="SvgCard" src={Settings} alt="" />
                                                    </h5>
                                                    <h6 className="card-subtitle mb-2 ">All Sizes Business</h6>
                                                    <p className="card-text">
                                                        Every business and industry requires an approach.
                                                      </p>
                                                    <a href="#"><button className="startNowButton">
                                                        Learn More
                                                    </button></a>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="card" >
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                        <img className="SvgCard" src={Data} alt="" />
                                                    </h5>
                                                    <h6 className="card-subtitle mb-2 ">Keep you in the Loop</h6>
                                                    <p className="card-text">
                                                        You make sure you know how campaign is performing.
                                                      </p>
                                                    <a href="#"><button className="startNowButton">
                                                        Learn More
                                                    </button></a>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                                            <div className="card" >
                                                <div className="card-body">
                                                    <h5 className="card-title">
                                                        <img className="SvgCard" src={World} alt="" />
                                                    </h5>
                                                    <h6 className="card-subtitle mb-2 ">Significant ROI</h6>
                                                    <p className="card-text">
                                                        To generate highly focused leads ready to purchases.
                                                      </p>
                                                    <a href="#"><button className="startNowButton">
                                                        Learn More
                                                    </button></a>
                                                </div>
                                            </div>
                                        </div>






                                    </div>
                                </div>
                            </div>
                        </section>


                        <section>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <img src="http://templates.thememodern.com/onum/images/seo-home1.png" alt="" />
                                    </div>


                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <h4><li>ABOUT US</li></h4>
                                        <h2>Grow Your Business
                                                with Our SEO Agency</h2>

                                        <p className="firstPera">
                                            Over 10 years Onum helping companies reach their financial and branding goals.
                                        </p>
                                        <p className="secondPera">
                                            Over the years, we have worked with Fortune 500s and brand-new startups. We help ambitious businesses like yours generate more profits by building awareness, driving web traffic, connecting with customers, and growing overall sales. Give us a call.
                                        </p>

                                        <button>Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="d-flex">
                                <div>
                                    <img
                                        className="caroselImage ml-5"
                                        src="http://templates.thememodern.com/onum/images/client-logo-2.svg"
                                        alt="First slide"
                                    />

                                </div>
                                <div>
                                    <img
                                        className="caroselImage"
                                        src="http://templates.thememodern.com/onum/images/client-logo-1.svg"
                                        alt="Second slide"
                                    />


                                </div>
                                <div>
                                    <img style={{ width: '93px', marginRight: '54px' }}
                                        className="caroselImage"
                                        src="http://templates.thememodern.com/onum/images/client-logo-3.png"
                                        alt="Third slide"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="caroselImage"
                                        src="http://templates.thememodern.com/onum/images/client-logo-1.svg"
                                        alt="Third slide"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="caroselImage"
                                        src="http://templates.thememodern.com/onum/images/client-logo-4.svg"
                                        alt="Third slide"
                                    />
                                </div>
                                <div>
                                    <img
                                        className="caroselImage"
                                        src="http://templates.thememodern.com/onum/images/client-logo-6.svg"
                                        alt="Third slide"
                                    />
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="container allCard">
                                <div className="row">

                                    <div className="col-lg-4 p-0 m-0">
                                        <div className="card" >
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                                <p className="card-text">
                                                    Content
                                        </p>
                                                <a href="/#" className="card-link">Card link</ a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 p-0 m-0">
                                        <div className="card" >
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                                <p className="card-text">
                                                    Content
                                        </p>
                                                <a href="/#" className="card-link">Card link</ a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 p-0 m-0">
                                        <div className="card" >
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                                <p className="card-text">
                                                    Content
                                        </p>
                                                <a href="/#" className="card-link">Card link</ a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 p-0 m-0">
                                        <div className="card" >
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                                <p className="card-text">
                                                    Content
                                        </p>
                                                <a href="/#" className="card-link">Card link</ a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 p-0 m-0">
                                        <div className="card" >
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                                <p className="card-text">
                                                    Content
                                        </p>
                                                <a href="/#" className="card-link">Card link</ a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 p-0 m-0">
                                        <div className="card" >
                                            <div className="card-body">
                                                <h5 className="card-title">Card title</h5>
                                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                                <p className="card-text">
                                                    Content
                                        </p>
                                                <a href="/#" className="card-link">Card link</ a>
                                            </div>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </section>

                        <section>
                            <div className="pricingSection">

                            </div>
                        </section>

                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Home
