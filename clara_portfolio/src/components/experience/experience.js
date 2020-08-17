import React from 'react';
import {Row,Col,Card} from 'react-materialize';

const Experience = (props) => (
    <Card>
        <Row>
            <Col s={2} m={2}>
                <img src={props.avatar} className="circle responsive-img" />
                {props.name}
            </Col>

            <Col s={10} s={10}>
                <p><b>{props.title} em <b>{props.company}</b></b></p>
                <p><i>{props.date}</i></p>
                <p>{props.description}</p>
                <br/>
                <p>Principais ferramentas:{props.tools}</p>
            </Col>
        </Row>
    </Card>
);

export default Experience;