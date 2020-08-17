import React from 'react';
import {Row, Col, Card, Button} from 'react-materialize';
import avatar from '../../images/linkedin.jpeg';
import github_logo from '../../images/github.png';
import linkedin_logo from '../../images/linkedin.png';
import './style.css';

const UserProfile = () => (
    <Card>
        <Row>
            <Col s={8} m={8} offset="s2 m2">
                <img src={avatar} className="circle responsive-img" />
            </Col>
        </Row>
        <Row className="center-align">
            <h5>Clara Anna Miranda</h5>
            <p className="grey darken-2 white-text">Back-End Developer</p>
        </Row>
        
        <Row>
            Java, Android, C/C++
            <br/>
            São Paulo, SP
        </Row>
        <a href="http://github.com/claramiranda" target="_blank"> <img src={github_logo} className="circle responsive-img " /> </a>
        <a href="http://www.linkedin.com/in/cannamiranda/" target="_blank"> <img src={linkedin_logo} className="responsive-img " /> </a>

    </Card>
);

export default UserProfile;