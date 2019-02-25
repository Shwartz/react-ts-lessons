import React from 'react';
import {codeWrapper, MDConvert} from '../../lib/mdConvert';

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


## Methods in Class (React.Component)

> *\`React.Component\`* is a Javascript Class.

> *\`Stateless Component\`* is a function, with a return type of React element.

It is crucial to define Prototype methods in Javascript class with *\`mehtodName(){}\`*, instead of *\`methodName = () => {}\`*.
Second example will assign a default value by initialising a Class.

Let's take a closer look at the setState method.

As per documentation:
> *\`this.props\`* and *\`this.state\`* may be updated asynchronously; you should not rely on their values for calculating the next state.

[ReactJS.org: State updates may be asynchronous](https://reactjs.org/docs/state-and-lifecycle.html#state-updates-may-be-asynchronous)


${codeWrapper(`
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

`)}

setState() API accepts Object and Function. The previous example use Object to update state. Nothing wrong with an example but it could fail in some situations (also described in the documentation).

Since we can use Function example below would be a recommended way.

${codeWrapper(`
    ...
    add() {
        this.setState((currentState: IState) => {
            const {inputValue, updateValue} = currentState;
            const result = inputValue + updateValue;
            return {inputValue, updateValue: result};
        });
    }
    ...
`)}

Callback in *\`setState\`* according to API returns current State and Props. That means you will be safe in the asynchronous application.

When using this approach, there is no need for *\`this\`* statement inside the callback.


There is nothing wrong to use *\`setState\`* with a passing Object. Use this approach when you do not depend on a current State.

${codeWrapper(`
    ...
    updateValue(value: number) {
        this.setState({
            inputValue: value
        });
    }
    ...
`)}

## Render method

>There are some rumours about performance issues when using arrow function inside the method you passing to a component. Since this is a sensitive subject, I suggest to read this article, and that should settle any doubts.
> [React, Inline Functions, and Performance](https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578)

The recommended approach to defining all the State values at the top of the render() function

${codeWrapper(`
    ...
    render() {
        const {inputValue, updateValue} = this.state;
    ...
`)}

Instead of passing methods to another React component use callback in your component. This way you won't need to pass *\`this\`* around or even worse to use an ugly *\`.bind(this)\`*.


${codeWrapper(`
    ...
    add={() => {
            this.add()
        }}
    ...
`)}

In our case, we do not use a callback. Therefore we could write arrow function without closure as a callback will be ignored.

*\`() => this.add() \`*

However, to make code consistent, we suggest using closers always like in the example above.
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
