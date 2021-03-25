import React from 'react';
import { Tabs, Tab, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import Monthly from './Monthly';
import {Checkout, Checkout2, Checkout3, Checkout4} from './Checkout';

export default class Donations extends React.Component {

    
    render () {
        return (
            <div className="donations">
                <Container className="tab-container">
                <Tabs className="tab-tabs" defaultActiveKey="one-time" id="tabs">
                <Tab className="tab-tabs1" eventKey="one-time" title="One-Time">
                    <h3>
                        Help Make A Difference
                    </h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br></br>sed do eiusmod tempor incididunt ut labore et dolore...
                    </p>
                        <Checkout
                            name={'Fionitas Project'}
                            description={'Donation'}
                            amount={5}
                        />
                        <Checkout2
                            name={'Fionitas Project'}
                            description={'Donation'}
                            amount={10}
                        />
                        <Checkout3
                            name={'Fionitas Project'}
                            description={'Donation'}
                            amount={20}
                        />
                        <Checkout4
                            name={'Fionitas Project'}
                            description={'Donation'}
                            amount={30}
                        />
                </Tab>
                <Tab className="tab-tabs2" eventKey="monthly" title="Monthly">
                <h3>
                        Help Make A Difference
                    </h3>
                    <p>
                    Help make a difference with a generous <br></br>monthly donation
                    </p>
                    <Monthly />
                </Tab>
                </Tabs>
                </Container>
    

            </div>
        );
    }
}