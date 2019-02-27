import React from 'react';
import {codeWrapper, MDConvert} from '../../lib/mdConvert';

export const Description = () => {
    const part1 = `

### Description

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

The recommended way by using Function.

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

In our case, we do not use a callback. Therefore we could write arrow function without closure.

*\`() => this.add() \`*

However, to make code consistent, I suggest using closers always like in the example above.

For a case when callback returns an argument, it would make sense to show returning type.

${codeWrapper(`
    <InputWidget
    ...
        change={(val: number) => {
            return this.updateValue(val)
            }
        }
    />
`)}

## Stateless Components

To use the full power of a Typescript add types to all props. By adding types, you will help to avoid extra type check and depends on your favourite Editor/IDE it might show all types in advance which is pretty awesome.

In our widget, we have three callbacks and one static value, which is a number.

${codeWrapper(`
    interface IProps {
        change: (value: number) => void;
        add: () => void;
        remove: () => void;
        inputValue: number;
    }
`)}

To use the full power of a Typescript add types to all props. By adding types, you will help to avoid extra type check and depends on your favourite Editor/IDE it might show all types in advance which is pretty awesome.

In our widget, we have three callbacks and one static value, which is a number.

${codeWrapper(`
    <Button
        ...
        onClick={() => {
            add();
        }}
    >
`)}

Let's explore onChange handler in the Input component

${codeWrapper(`
    <Input
        ...
        onChange={({currentTarget}) => {
            change(+currentTarget.value);
        }}
        ...
    />
`)}
The *\`onChange\`* returns *\`React.ChangeEvent\`* as an argument. We are interested in value which we can get from *\`currentTarget.value\`*. The problem is that this property return type is a string. So, we need to convert it to a number which is done by adding *\`+\`* sign.

## Improvements

So, we have a cute tiny widget which can calculate some value. We can change the value what we want to add or remove from the total. What if we're going to reuse this widget inside in some other component?

In that case, we would need to copy over all the methods.

What if we want the same component but instead of add or remove to have other operations? So, we would need to change a label and add new methods.

This approach could become messy as we would create similar but not the same Components and in some case, they would do one thing in other case something else.  How to write tests for this approach?

Let's move to Lesson 2 and try to improve our Counter Widget.
`;

    return (
        <React.Fragment>
            <MDConvert>{part1}</MDConvert>
            <p className="end">~ ~ ~ end ~ ~ ~</p>
        </React.Fragment>
    );
};
