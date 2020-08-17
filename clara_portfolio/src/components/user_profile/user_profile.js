import React from 'react';
import {Row, Col, Card, Button} from 'react-materialize';
import avatar from '../../images/linkedin.jpeg';
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
            <p className="grey darken-2 white-text">Software Developer</p>
        </Row>
        <Row>
            25 anos, São Paulo - SP 
            <br/>
            Java, Android, C/C++
        </Row>

    </Card>
);

export default UserProfile;