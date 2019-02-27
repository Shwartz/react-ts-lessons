import React from 'react';
import {codeWrapper, MDConvert} from '../../lib/mdConvert';

const part1 = `
### Description

This is the same Counter Widget with the same methods. However, we are going to abstract Labels and Namings for the widget which would give as reusable Widget. We will introduce the Model which will keep methods for the widget separate to avoid copy/paste when re-using widget.

### What will you learn

 - Create counter Class and move functionality outside Component
 - Handle communication between counter Class and Component

### Source

[https://github.com/Shwartz/react-ts-lessons/tree/master/src/lesson-2](https://github.com/Shwartz/react-ts-lessons/tree/master/src/lesson-2)

## Counter Class

Let's move all functionality outside to the Counter component.

> The main advantage is that functionality doesn't depend on ReactJS and is pure VanillaJS, which means we can reuse it in any other Library or Framework. Counter component won't change.

A current example is just a small use case. However, imagine an enterprise level app in an agile dev environment where functionality changes are a day to day requirement.

In the next lesson, we will learn generic types and make this solution generic.

Let's create Counter Object where we can collect *\`inputValue\`* and *\`updateValue\`*.

${codeWrapper(`
export interface IScope {
    inputValue: number;
    updateValue: number;
}
    ...
`)}

We will convert this to generic type in the next Lesson.

As per Counter component we need the following methods: *\`get()\`*, *\`set()\`*, *\`update()\`* and *\`clear()\`* in a case Counter is not needed anymore. We use *\`constructor()\`* to initialise class.

${codeWrapper(`
class Counter {
  private handlers: TCallback[];
  private scope: IScope;

  constructor() {
    }

    set() {

    }

    get() {

    }

    update() {

    }

    clear() {
    }
}    ...
`)}

Scope and handlers initialised for handling class state.

In a *\`constructor\`*, we set *\`initialScope\`* which is mandatory.

${codeWrapper(`
...
set(scope: IScope) {
    this.scope = scope;
    this.handlers.forEach((handler) => {
        handler(scope);
    });
}
...
`)}


--- WORK IN PROGRESS ---
`;

export const Description = () => {
    return (
        <React.Fragment>
            <MDConvert>{part1}</MDConvert>
            <p className="end">~ ~ ~ end ~ ~ ~</p>
        </React.Fragment>
    );
};
