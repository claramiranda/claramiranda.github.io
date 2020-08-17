import React from 'react';
import Home from "./components/home/home";
import Contact from "./components/contact/contact"
import Projects from "./components/project/projects"
import Professional from "./components/professional/professional"
import {Container} from 'react-materialize';
import {Switch, Route} from 'react-router-dom';


const Main = () => (
    <main>
        <Container>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/professional' component={Professional}/>
                <Route path='/tools' component={Projects}/>
                <Route path='/scholarship' component={Projects}/>
                <Route path='/projects' component={Projects}/>
                <Route path='/contact' component={Contact}/>
            </Switch>
        </Container>
    </main>

);

export default Main;