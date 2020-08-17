import React from 'react';
import { Row, Col, Card} from 'react-materialize';
import UserProfile from "../user_profile/user_profile";
import Experience from "../experience/experience";

import ibm_logo from '../../images/ibm.png';
import sprint_logo from '../../images/sprint.png';
import att_logo from '../../images/att.png';
import company_avatar from '../../images/company.png';
import company_avatar2 from '../../images/avatar2.png';


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

export default Home;