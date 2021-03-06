import React, { Fragment } from 'react'
import { Carousel } from 'react-bootstrap'
import './Home.css'
import Rocket from '../SVG/Rocket.svg'
import Settings from '../SVG/Settings.svg'
import World from '../SVG/World.svg'
import Data from '../SVG/Data.svg'
import Code from '../SVG/Code.svg'
import Doc from '../SVG/Doc.svg'
import Pie from '../SVG/Pie.svg'
import PieTwo from '../SVG/PieTwo.svg'
import Search from '../SVG/Search.svg'



const Home = () => {
    return (
        <Fragment>
            <div className="home">

                <div className="LessSection">
                    <div className="content">

                        {/* top section  */}
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


                        {/* sercives section  */}
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

                        {/* about section  */}
                        <section className='aboutUsSection'>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <img className="ml-2" src="http://templates.thememodern.com/onum/images/seo-home1.png" alt="" />
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

                                        <button className="startNowButton">Learn More</button>
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
                        {/* card Section  */}
                        <section>
                            <div className="container allCard">
                                <div className="row">

                                    <div className="col-lg-4 p-0 m-0">
                                        <div className="card" >
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <img className="SvgCard" src={Pie} alt="" />
                                                </h5>
                                                <h6 className="card-subtitle mb-2 ">Content Marketing</h6>
                                                <p className="card-text">
                                                    You can provide the answers that your potential customers are trying to find, so you can become the industry.
                                                      </p>
                                                <a href="#"><button className="startNowButton">
                                                    Learn More
                                                    </button></a>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-4 p-0 m-0">
                                        <div className="card" >
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <img className="SvgCard" src={PieTwo} alt="" />
                                                </h5>
                                                <h6 className="card-subtitle mb-2 ">Social Marketing</h6>
                                                <p className="card-text">
                                                    Create and manage top-performing social campaigns and start developing a dedicated customer fan base.
                                                      </p>
                                                <a href="#"><button className="startNowButton">
                                                    Learn More
                                                    </button></a>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-4 p-0 m-0">
                                        <div className="card" >
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <img className="SvgCard" src={Doc} alt="" />
                                                </h5>
                                                <h6 className="card-subtitle mb-2 ">App Development</h6>
                                                <p className="card-text">
                                                    Create, publish, and promote engaging content to generate more traffic and build a dedicated community.
                                                      </p>
                                                <a href="#"><button className="startNowButton">
                                                    Learn More
                                                    </button></a>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-4 p-0 m-0">
                                        <div className="card" >
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <img className="SvgCard" src={Search} alt="" />
                                                </h5>
                                                <h6 className="card-subtitle mb-2 ">SEO Optimization</h6>
                                                <p className="card-text">
                                                    Get more website traffic, more customers, and more online visibility with powerful SEO services.
                                                      </p>
                                                <a href="#"><button className="startNowButton">
                                                    Learn More
                                                    </button></a>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-4 p-0 m-0">
                                        <div className="card" >
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <img className="SvgCard" src={Code} alt="" />
                                                </h5>
                                                <h6 className="card-subtitle mb-2 ">Web Development</h6>
                                                <p className="card-text">
                                                    Your website has to impress your visitors within just a few seconds. If it runs slow, if it feels outdated.
                                                      </p>
                                                <a href="#"><button className="startNowButton">
                                                    Learn More
                                                    </button></a>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-4 p-0 m-0">
                                        <div className="card" >
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    <img className="SvgCard" src={Rocket} alt="" />
                                                </h5>
                                                <h6 className="card-subtitle mb-2 ">PPC Advertising</h6>
                                                <p className="card-text">
                                                    Target your ideal search phrases and get found at the top of Google???s search results. PPC allows you.immediate.
                                                      </p>
                                                <a href="#"><button className="startNowButton">
                                                    Learn More
                                                    </button></a>
                                            </div>
                                        </div>
                                    </div>





                                </div>
                            </div>
                        </section>

                        {/* pricing section  */}
                        <section>
                            <div className="pricingSection ">
                                <img className="leftImage" src="http://templates.thememodern.com/onum/images/shape2-home1.png" alt="" />
                                <h4 className="text-center"><li>CHOOSE YOUR PLAN</li></h4>
                                <h5 className="text-center"> Flexible Pricing Plans</h5>
                                <p className="text-center">We have experience working with large and small businesses and are ready to
                                   develop a targeted strategy and plan that???s just right for you.</p>


                                <div className="container-fluid">
                                    <div className="container">
                                        <div className="row">
                                            {/* price card */}


                                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">


                                                <div className="card-deck mb-3 text-center">
                                                    <div className="card mb-4 box-shadow">
                                                        <div className="card-header">
                                                            <h4 className="my-0 font-weight-normal">STANDARD</h4>
                                                        </div>
                                                        <div className="card-body">
                                                            <img src="http://templates.thememodern.com/onum/images/price1.png" alt="" />
                                                            <h1 className="card-title pricing-card-title">$ 69.99<small className="text-muted">/ mo</small></h1>

                                                            <ul className="list-unstyled mt-3 mb-4">

                                                                <li>Social Media Marketing</li>




                                                                <li>2.100 Keywords</li>
                                                                <li>One Way Link Building</li>
                                                                <li>5 Free Optimization</li>
                                                                <li>3 Press Releases</li>
                                                            </ul>
                                                            <button type="button" className="startNowButton mt-4">Choose Plan</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">


                                                <div className="card-deck mb-3 text-center">
                                                    <div className="card mb-4 box-shadow">
                                                        <div className="card-header">
                                                            <h4 className="my-0 font-weight-normal">ECONOMY</h4>
                                                        </div>
                                                        <div className="card-body">
                                                            <img src="http://templates.thememodern.com/onum/images/price2-1.png" alt="" />
                                                            <h1 className="card-title pricing-card-title">$ 79.99<small className="text-muted">/ mo</small></h1>
                                                            <ul className="list-unstyled mt-3 mb-4">
                                                                <li>Social Media Marketing</li>
                                                                <li>3.100 Keywords</li>
                                                                <li>  One Way Link Building</li>
                                                                <li>10 Free Optimization</li>
                                                                <li>5 Press Releases</li>
                                                            </ul>
                                                            <button type="button" className="startNowButton mt-4">Choose Plan</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">


                                                <div className="card-deck mb-3 text-center">
                                                    <div className="card mb-4 box-shadow">
                                                        <div className="card-header">
                                                            <h4 className="my-0 font-weight-normal">EXECUTIVE</h4>
                                                        </div>
                                                        <div className="card-body">
                                                            <img src="http://templates.thememodern.com/onum/images/price3-1.png" alt="" />
                                                            <h1 className="card-title pricing-card-title">$ 89.99<small className="text-muted">/ mo</small></h1>
                                                            <ul className="list-unstyled mt-3 mb-4">
                                                                <li>Social Media Marketing</li>
                                                                <li>5.100 Keywords</li>
                                                                <li>One Way Link Building</li>
                                                                <li> 15 Free Optimization</li>
                                                                <li>10 Press Releases</li>






                                                            </ul>
                                                            <button type="button" className="startNowButton mt-4">Choose Plan</button>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>











                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>

                        {/* review section  */}
                        <section>
                            <div className="container-fluid">
                                <div className="container">
                                    <div className="ReviewSec">
                                        <div className="row">
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                <h4 className="text-center"><li>ACtive Clients</li></h4>
                                                <h2 className="text-center">  330 +</h2>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                <h4 className="text-center">
                                                    <li>
                                                        PROJECTS DONE
                                                    </li>
                                                </h4>
                                                <h2 className="text-center"> 850 +</h2>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                <h4 className="text-center">
                                                    <li>
                                                        TEAM ADVISORS


                                                    </li>
                                                </h4>
                                                <h2 className="text-center"> 25 +</h2>
                                            </div>
                                            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                                                <h4 className="text-center">
                                                    <li>
                                                        GLORIOUS YEARS


                                                    </li>
                                                </h4>
                                                <h2 className="text-center"> 10 +</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

        </Fragment >
    )
}

export default Home
