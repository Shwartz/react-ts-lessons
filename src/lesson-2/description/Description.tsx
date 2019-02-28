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

> The main advantage is that functionality doesn't depend on ReactJS and you can use directly to React Native or any other library or framework. Counter component won't change.

A current example is just a small use case. However, imagine an enterprise level app in an agile dev environment where functionality changes are a day to day requirement.

Let's create Counter Object where we can collect *\`inputValue\`* and *\`updateValue\`*.

${codeWrapper(`
export interface IScope {
    inputValue: number;
    updateValue: number;
}
    ...
`)}

As per Counter component we need the following methods: *\`get()\`*, *\`set()\`*, *\`update()\`* Also, we add *\`clear()\`* method in a case Counter is not needed anymore. We use *\`constructor()\`* to initialise a class.

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
constructor(initialScope: IScope) {
    this.scope = initialScope;
}
...
`)}

Then methods *\`set\`* and *\`get\`* will handle scope updates.

${codeWrapper(`
...
set(scope: IScope) {
    this.scope = scope;
    this.handlers.forEach((handler) => {
        handler(scope);
    });
}

get() {
    return this.scope;
}
...
`)}

Bear in mind, any time we set new scope, we notify handlers as well.
Remember in the Class *\`Lesson2.tsx\`* we are calling *\`this.counter.update()\`* and passing a callback method with a *\`setState\`*. This concept is a mega important to understand. It took me some time to crack it.

${codeWrapper(`
// example from Lesson2.tsx
...
this.counter.update((scope: IScope) => {
    this.setState(scope);
});
...
`)}

So, here we are collecting listeners, with the *\`update()\`* method.
${codeWrapper(`
...
update(handler: TCallback) {
    this.handlers = [...this.handlers, handler];
}

clear() {
    this.handlers = [];
}
...
`)}

Since we created a method to *\`update()\`* we need to create a method to remove as well. Therefore there is *\`clear()\`* to remove all the handlers before we are removing a component.

Now, we have a class, with getters and setters. However, regards to the counter, there is no counter functionality yet.

Let's add methods for the counter. Each method will update ALL ENTIRE SCOPE!

${codeWrapper(`
...
add() {
    const {inputValue, updateValue} = this.scope;
    const result = inputValue + updateValue;
    this.set({inputValue, updateValue: result});
}

remove() {
    const {inputValue, updateValue} = this.scope;
    const result = updateValue - inputValue;
    this.set({inputValue, updateValue: result});
}

inputChange(value: number) {
    const {updateValue} = this.scope;
    this.set({inputValue: value, updateValue});
}
...
`)}

> There is a place for improvements but let's leave that for the Lesson3

Here is a full class.


${codeWrapper(`
export interface IScope {
    inputValue: number;
    updateValue: number;
}

type TCallback = (scope: IScope) => void;

class Counter {
    private handlers: TCallback[] = [];
    private scope: IScope;

    constructor(initialScope: IScope) {
        this.scope = initialScope;
    }

    add() {
        const {inputValue, updateValue} = this.scope;
        const result = inputValue + updateValue;
        this.set({inputValue, updateValue: result});
    }

    remove() {
        const {inputValue, updateValue} = this.scope;
        const result = updateValue - inputValue;
        this.set({inputValue, updateValue: result});
    }

    inputChange(value: number) {
        const {updateValue} = this.scope;
        this.set({inputValue: value, updateValue});
    }

    set(scope: IScope) {
        this.scope = scope;
        this.handlers.forEach((handler) => {
            handler(scope);
        });
    }

    get() {
        return this.scope;
    }

    update(handler: TCallback) {
        this.handlers = [...this.handlers, handler];
    }

    clear() {
        this.handlers = [];
    }
}

export const counter = (initialScope: IScope) => new Counter(initialScope);
`)}


In case you wonder about this line

*\`export const counter = (initialScope: IScope) => new Counter(initialScope);\`*

Initialising is done to avoid using *\`new\`* every time we are using a Counter component, kind of shortcut.


In Lesson2 class, we don't need to add any more methods. We connect (don't want to use the word *\`hook\`* :)) together *\`setState\`* and *\`counter.update\`*.

${codeWrapper(`
...
const initialState: IScope = {
    inputValue: 5,
    updateValue: 0
};

export class Lesson2 extends Component<IProps> {
state: IScope;
counter = counter(initialState);

constructor(props: IProps) {
    super(props);
    this.state = this.counter.get();
    this.counter.update((scope: IScope) => {
        this.setState(scope);
    });
}
...
`)}

We initialise a Counter component with initial State. With *\`this.state = this.counter.get();\`* we bind, initial values from Counter component.
Now, for *\`inputWidget\`*, we expose counter class methods to buttons.

${codeWrapper(`

...
render() {
    const {inputValue, updateValue} = this.state;

    return (
        <div className={styles.Lesson2}>
            <h1>Lesson 2 - Simple Counter</h1>

            <h3>Counter Widget Demo</h3>

            <div className={styles.codeDemo}>
                <p className={styles.output}>Total: {updateValue}</p>
                <InputWidget
                    leftButtonHandler={
                        () => {
                            this.counter.remove();
                        }
                    }
                    rightButtonHandler={
                        () => {
                            this.counter.add();
                        }
                    }
                    leftButtonLabel={\`Remove\`}
                    rightButtonLabel={\`Add\`}
                    inputChange={
                        (value: number) => {
                            this.counter.inputChange(value);
                        }
                    }
                    inputValue={inputValue}
                />
            </div>

            <Description />
        </div>
    );
}
...
`)}

We now have a generic approach to our button labels and methods. That means, now we can use this component outside of the Counter app and change labels and methods for entirely different tasks.

`;

export const Description = () => {
    return (
        <React.Fragment>
            <MDConvert>{part1}</MDConvert>
            <p className="end">~ ~ ~ end ~ ~ ~</p>
        </React.Fragment>
    );
};
