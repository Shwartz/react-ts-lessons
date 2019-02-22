import {CssBaseline, Grid, List, ListItem} from '@material-ui/core';
import React, {Component} from 'react';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
import styles from './App.module.scss';
import './common/prism.css';

import Home from './Home';
import Lesson1 from './lesson-1/Lesson1';
import Lesson2 from './lesson-2/Lesson2';

class App extends Component {
    state = {
        selectedIndex: 0,
    };

    handleListItemClick = (ev: React.MouseEvent, index: number) => {
        this.setState({selectedIndex: index});
    };

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <div className={styles.App}>
                    <CssBaseline/>
                    <Grid container={true} spacing={16}>
                        <Grid item={true} xs={4}>
                            <List component="nav">
                                <Link to="/">
                                    <ListItem
                                        button={true}
                                        selected={this.state.selectedIndex === 1}
                                        onClick={(ev) => this.handleListItemClick(ev, 1)}
                                    >
                                        Home
                                    </ListItem>
                                </Link>
                                <Link to="/lesson1">
                                    <ListItem
                                        button={true}
                                        selected={this.state.selectedIndex === 2}
                                        onClick={(ev) => this.handleListItemClick(ev, 2)}
                                    >
                                        Lesson 1 - Simple counter
                                    </ListItem>
                                </Link>
                                <Link to="/lesson-2">
                                    <ListItem
                                        button={true}
                                        selected={this.state.selectedIndex === 3}
                                        onClick={(ev) => this.handleListItemClick(ev, 3)}
                                    >
                                        Lesson 2 - Simple counter
                                    </ListItem>
                                </Link>
                            </List>
                        </Grid>
                        <Grid item={true} xs={8}>
                            <section>
                                <Route exact={true} path="/" component={Home}/>
                                <Route path="/lesson1" component={Lesson1}/>
                                <Route path="/lesson-2" component={Lesson2}/>
                            </section>
                        </Grid>
                    </Grid>
                </div>
            </Router>
        );
    }
}

export default App;