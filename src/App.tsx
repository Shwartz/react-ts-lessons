import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/lesson1">Lesson 1 - simple counter</Link></li>
                        <li><Link to="/lesson-2">Lesson 2</Link></li>
                    </ul>
                </nav>
                <section>
                    <Route exact path="/" component={Home}/>
                    <Route path="/lesson1" component={Lesson1}/>
                    <Route path="/lesson-2" component={Lesson2}/>
                </section>
            </div>
        </Router>
    );
  }
}

export default App;
