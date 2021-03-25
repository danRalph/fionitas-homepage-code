import React from 'react';
import Donations from './Donations';
import Subscribe from './Subscribe';

import { Card, Button } from 'react-bootstrap';

import IMG1 from '../images/needle.jpeg';
import IMG2 from '../images/signs.jpg';
import IMG3 from '../images/hands.jpeg';
import IMG4 from '../images/kenya.jpg';
import IMG5 from '../images/first-aid-dummy.jpg';
import IMG6 from '../images/happy-kids.jpeg';
import IMG7 from '../images/happy-kids-2.jpeg';


export default function Homepage () {

        return (
            <div className="homepage">
                <div className="homepage-hero">
                    <h1 data-aos="fade-in" data-aos-delay="300">
                        Teaching Life <br></br> Saving Skills
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="400">
                        All life is precious, which is why we must learn <br></br>
                        how to prevent it's loss. From Nigeria, to Kenya, <br></br>
                        to the UK. we help those in need.
                    </p>
                    <button type="button" data-aos="fade-up" data-aos-delay="600">
                        MAKE A DIFFERENCE
                    </button>
                    <img className="image1-home" src={IMG1}></img>
                    <img className="image2-home" src={IMG2}></img>
                </div>

                <div className="homepage-info">
                    <div className="info-row">
                        <div className="info-column">
                            <div className="block-colour"></div>
                            <img src={IMG3}></img>
                        </div>
                        <div className="info-column">
                            <h1 data-aos="fade-left" data-aos-delay="300">
                                We want to empower our students
                            </h1>
                            <p className="info-main" data-aos="fade-left" data-aos-delay="500">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br> sed do eiusmod tempor incididunt ut labore et dolore <br></br> magna aliqua.
                            </p>
                            <p className="info-sub" data-aos="fade-left" data-aos-delay="700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br></br> tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="homepage-howWeHelp">
                    <h1 data-aos="fade-in" data-aos-delay="300">
                        HOW WE HELP
                    </h1>
                    <div className="howWeHelp-row">
                        <div className="howWeHelp-column">
                            <Card className="cards" style={{ width: '270px', height: '436px' }}>
                                <Card.Img variant="top" src={IMG2} style={{ width: '270px', height: '270px' }} />
                                <Card.Body>
                                    <Card.Title data-aos="fade-up" data-aos-delay="500">The United Kingdom</Card.Title>
                                    <a href="" data-aos="fade-left" data-aos-delay="800">Learn more ></a>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="howWeHelp-column">
                            <Card className="cards" style={{ width: '270px', height: '436px' }}>
                                <Card.Img variant="top" src={IMG4} style={{ width: '270px', height: '270px' }} />
                                <Card.Body>
                                    <Card.Title data-aos="fade-up" data-aos-delay="500">Kenya</Card.Title>
                                    <a href="" data-aos="fade-left" data-aos-delay="800">Learn more ></a>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="howWeHelp-column">
                            <Card className="cards" style={{ width: '270px', height: '436px' }}>
                                <Card.Img variant="top" src={IMG5} style={{ width: '270px', height: '270px' }} />
                                <Card.Body>
                                    <Card.Title data-aos="fade-up" data-aos-delay="500">Nigeria</Card.Title>
                                    <a href="" data-aos="fade-left" data-aos-delay="800">Learn more ></a>
                                </Card.Body>
                            </Card>
                        </div>
                        <div className="howWeHelp-column">
                            <Card className="cards" style={{ width: '270px', height: '436px' }}>
                                <Card.Img variant="top" src={IMG6} style={{ width: '270px', height: '270px' }} />
                                <Card.Body>
                                    <Card.Title data-aos="fade-up" data-aos-delay="500">Remote</Card.Title>
                                    <a href="" data-aos="fade-left" data-aos-delay="800">Learn more ></a>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>

                <div className="homepage-whatWeDid">
                    <h1 data-aos="fade-in" data-aos-delay="300">
                        HELP THE NIGERIAN YOUTH <br></br>
                        THIS CHRISTMAS
                    </h1>
                    <img className="forMobile" src={IMG7}></img>
                    <div className="description-nigeria">
                        <img className="forDesktop" src={IMG7}></img>
                        <h2>
                            Short Description of <br></br>
                            what we did in Nigeria.
                        </h2>
                        <a href="">Read More</a>
                    </div>
                </div>

                <div className="homepage-youHelp">
                    <h1 data-aos="fade-in" data-aos-delay="300">
                        HOW YOU CAN HELP
                    </h1>
                    <div className="help-row">
                        <div className="help-column">
                            <div className="in-UK" data-aos="fade-up" data-aos-delay="600">
                                <h3 className="help-h3">
                                    The United Kingdom
                                </h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...
                                </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                        <div className="help-column">
                            <div className="out-UK" data-aos="fade-up" data-aos-delay="600">
                                <h3 className="help-h3">
                                    Outside The UK
                                </h3>
                                <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...
                                </p>
                                <a href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <Donations />

                <Subscribe />

            </div>
        );
    
}

