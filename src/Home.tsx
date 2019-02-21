import React from 'react';

export class Home extends React.Component {

    render() {
        return (
            <div>
                <h1>Welcome to React Typescript tutorial</h1>
                <p>Aim of this tutorial is to create step by step examples on how to build scalable one page application
                    with functional programming pattern in mind</p>

                <p>Each lesson is added under <b>/src/lesson-1/</b> folder. Each folder has specific task to solve</p>
            </div>
        );
    }
}

export default Home;
