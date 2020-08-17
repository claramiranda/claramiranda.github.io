import React from 'react'
import Experience from '../experience/experience'

import { Row, Col, Card} from 'react-materialize';

import UserProfile from "../user_profile/user_profile";

import ibm_logo from '../../images/ibm.png';
import sprint_logo from '../../images/sprint.png';
import att_logo from '../../images/att.png';


const Professional = (props) => (
    <Row>
        <Col m={3} s={12}>
            <UserProfile /> 
        </Col>
        <Col m={8} s={12}>
            <h5 className="subtitle">Experiência Profissional</h5>
                <Experience title="Integration Developer"
                        company="IBM"
                        date="3 meses"
                        description="Suporte à tickets de manutenção em ambientes Linux/Unix, 
                        Desenvolvimento de novas funcionalidades e manutenção de códigos já existentes em Java, C e Shell.
                        Execução e manutenção de queries SQL."
                        tools="Confluence, Jira, Git"
                        avatar={ibm_logo}
            />
                <Experience title="Configuration Management "
                        company="Sprint - IBM Vendor"
                        date="2 anos"
                        description="Gerenciamento do processo de instalação de releases nos ambientes de teste e produção,
                        além da documentação de todo o processo e redação de planos de instalação e backout. Também fazia parte da minha rotina oferecer suporte em nível de infraestrutura aos times de teste e desenvolvimento, atuação dentro do time de SCRUM do cliente e suporte on-call 24/7 aos ambientes de produção."
                        tools="Jenkins, Jira, Confluence, Git, MS Project"
                        avatar={sprint_logo}
            />

                <Experience title="Application Developer"
                        company="AT&T - IBM Vendor"
                        date="1 ano"
                        description="Suporte em nível de infraesturura e desenvolvimento de pequenos programas, soluções e automações à sistemas UNIX e VMS, utilizando as linguagens C, Shell e BASIC. Elaboração de planos de instalação e backout e participação em reuniões técnicas de planejamento de projetos junto ao cliente."
                        tools="VIM, GCC, BASH, Git"
                        avatar={att_logo}
            />
        </Col>
    </Row>
);

export default Professional;