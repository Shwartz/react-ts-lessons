import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { createMuiTheme } from '@material-ui/core/styles';
import styles from './App.module.scss';

import Home from './Home';
import Lesson1 from './lesson-1/Lesson1';
import Lesson2 from './lesson-2/Lesson2';


const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    },
});

class App extends Component {
    state = {
        selectedIndex: 0,
    };

    handleListItemClick = (ev: React.MouseEvent, index: number) => {
        this.setState({selectedIndex: index});
    };

    render() {
        return (
            <Router>
                <div className={styles.App}>
                    <CssBaseline />
                    <Grid container spacing={16}>
                        <Grid item xs={4}>
                            <List component="nav">
                                <Link to="/">
                                    <ListItem
                                        button
                                        selected={this.state.selectedIndex === 1}
                                        onClick={ev => this.handleListItemClick(ev, 1)}>
                                        Home
                                    </ListItem>
                                </Link>
                                <Link to="/lesson1">
                                    <ListItem
                                        button
                                        selected={this.state.selectedIndex === 2}
                                        onClick={ev => this.handleListItemClick(ev, 2)}>
                                        Lesson 1 - Simple counter
                                    </ListItem>
                                </Link>
                                <Link to="/lesson-2">
                                    <ListItem
                                        button
                                        selected={this.state.selectedIndex === 3}
                                        onClick={ev => this.handleListItemClick(ev, 3)}>
                                        Lesson 2
                                    </ListItem>
                                </Link>
                            </List>
                        </Grid>
                        <Grid item xs={8}>
                            <section>
                                <Route exact path="/" component={Home}/>
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
