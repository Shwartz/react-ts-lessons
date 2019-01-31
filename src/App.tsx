import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home';
import Lesson1 from './lesson-1/Lesson1';
import Lesson2 from './lesson-2/Lesson2';
import './App.css';

interface IProps {

}

export class App extends React.Component<IProps> {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/lesson-1" component={Lesson1}/>
                    <Route path="/lesson-2" component={Lesson2}/>
                </div>
            </Router>
        )
    }
}

export default App;
