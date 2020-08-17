import React from 'react';
import {Row, Col, Card, Input, Button, Icon} from 'react-materialize';
import UserProfile from '../user_profile/user_profile';

import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';


const Contact = () => (
    <Row>
        <Col m={3} s={12}>
            <UserProfile />
        </Col>
        <Col m={8} s={12}>
            <h5>Contato</h5>
            <Card>
                <p>Você pode me encontrar via e-mail no endereço clara.rosa.miranda@gmail.com</p>
                <p>Ou por telefone, (11) 9 5898 4849</p>
                <br/>
            
            </Card>
        </Col>
    </Row>

);

export default Contact;