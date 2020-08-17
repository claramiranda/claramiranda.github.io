import React from 'react';
import { Row, Col, Card} from 'react-materialize';

import UserProfile from "../user_profile/user_profile";
import Experience from "../experience/experience";

import ibm_logo from '../../images/ibm.png';
import sprint_logo from '../../images/sprint.png';
import att_logo from '../../images/att.png';



const Home = () => (
    <Row>
        <Col m={3} s={12}>
            <UserProfile /> 
        </Col>
        <Col m={8} s={12}>
            <h5 className="subtitle">Sobre Mim</h5>
            <Card>
                <div>
                    <p><b>Quem sou eu?</b></p>
                    <p>Uma jovem paulistana, recém-formada em Análise e Desenvolvimento de Sistemas e agora aluna de Sistemas de Informação.
                        Busco por oportunidades para atuar como Desenvolvedora de Software.
                    </p>
                    <br/>
                    <p><b>Meus pontos fortes</b></p>
                    <p>Até o momento aproveitei ao máximo todas as oportunidades na área da Tecnologia que me foram dadas. Embora esteja mais focada em me aprofundar no desenvolvimento de software, tenho uma formação bem diversificada com passagens enriquecedoras pela área da pesquisa e 
                        aplicação da programação na educação. 
                    </p>
                </div>
            </Card>
        </Col>
    </Row>

);

export default Home;