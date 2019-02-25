import React from 'react';
import {MDConvert} from '../../lib/mdConvert';

export const Description = () => {
    const part1 = `

### Description:

We will use a Counter Widget with three methods such as Add, Remove, Input and show a Total amount after a calculation.

### What will you learn

 - How to use the *\`setState\`* method for *\`React.Component\`*
 - Use of Arrow functions in *\`Render()\`* method and in props
 - Use of Typescript types for Stateless Components, interface definition and props


### Source

[https://github.com/Shwartz/react-ts-lessons/tree/master/src/lesson-1](https://github.com/Shwartz/react-ts-lessons/tree/master/src/lesson-1)


### Methods in Class (React.Component)

> *\`React.Component\`* is a Javascript Class.

> *\`Stateless Component\`* is a function, with a return type of React element.

It is crucial to define Prototype methods in Javascript class with *\`mehtodName(){}\`*, instead of *\`methodName = () => {}\`*.
Second example will assign a default value by initialising a Class.

Let's take a closer look at the setState method.

As per documentation:
> *\`this.props\`* and *\`this.state\`* may be updated asynchronously; you should not rely on their values for calculating the next state.

[ReactJS.org: State updates may be asynchronous](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)


\`\`\`javascript
    ...
    add() {
        const {inputValue, updateValue} = this.state;
        const result = inputValue + updateValue;
        this.setState(
            {
                inputValue,
                updateValue: result
            }
        );
    }
    ...

\`\`\`

setState() API accepts Object and Function. The previous example use Object to update state. Nothing wrong with an example but it could fail in some situations (also described in the documentation).

Since we can use Function example below would be a recommended way.

\`\`\`javascript
    ...
    add() {
        this.setState((currentState: IState) => {
            const {inputValue, updateValue} = currentState;
            const result = inputValue + updateValue;
            return {inputValue, updateValue: result};
        });
    }
    ...

\`\`\`

`;

    return (
        <div>
            <MDConvert>{part1}</MDConvert>

            <hr/>

            <p>To produce a counter we use main Class Lesson1 with methods add(), remove() and update(). The counter
                itself is a /widget/InputWidget.tsx.</p>

            <p>The main problem with this approach is that we can't easily reuse this widget. To reuse we need to copy
                all the methods and a widget to the needed Class. Clearly, this would create a lot of code
                duplication.</p>

            <p>This is our Lesson1 Class:</p>

            <p>InputWidget.tsx is a function where we passing values and callbacks. The component itself doesn't
                care about where it will be placed or how values will be calculated.</p>

        </div>
    );
};
