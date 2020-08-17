import React from 'react';
import Home from "./components/home/home";
import Contact from "./components/contact/contact"
import Projects from "./components/project/projects"
import {Container} from 'react-materialize';
import {Switch, Route} from 'react-router-dom';


const Main = () => (
    <main>
        <Container>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/contact' component={Contact}/>
                <Route path='/projects' component={Projects}/>        
            </Switch>
        </Container>
    </main>

);

export default Main;