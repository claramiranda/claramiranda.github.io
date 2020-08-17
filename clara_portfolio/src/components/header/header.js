import React from 'react';

import { Navbar, NavItem, Row} from 'react-materialize';
import Contact from "../contact/contact"
import {NavLink} from 'react-router-dom';

const Header = () => (
    <Row>
        <Navbar className="grey darken-2">
            <li><NavLink to="/">Sobre</NavLink></li>
            <li><NavLink to="/professional">Experiências Profissionais</NavLink></li>
            <li><NavLink to="/tools">Idiomas e Ferramentas</NavLink></li>
            <li><NavLink to="/scholarship">Formação Acadêmica</NavLink></li>
            <li><NavLink to="/projects">Portfolio</NavLink></li>
            <li><NavLink to="/contact">Contato</NavLink></li>
            
        </Navbar>
    </Row>
);

export default Header;