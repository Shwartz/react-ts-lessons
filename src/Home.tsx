import React from 'react';

export class Home extends React.Component {

    render() {
        return (
            <div>
                <h1>Welcome to React Typescript tutorial</h1>
                <p>This tutorial aims to create a step by step examples on how to build a scalable one-page application
                    with functional programming pattern in mind</p>

                <p>You can see the source code in Github:
                    <a href="https://github.com/Shwartz/react-ts-lessons">
                        https://github.com/Shwartz/react-ts-lessons
                    </a>
                </p>

                <h4>Lesson 1</h4>
                <p>Counter widget built based on ReactJS documentation</p>

                <h4>Lesson 2</h4>
                <p>The same Counter widget however we moving out logic into a model.</p>
            </div>
        );
    }
}

export default Home;
