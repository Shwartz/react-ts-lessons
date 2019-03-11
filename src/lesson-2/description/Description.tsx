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

Let's create Counter Object where we can collect *\`inputValue\`* and *\`totalValue\`*.

${codeWrapper(`
export interface IScope {
    inputValue: number;
    totalValue: number;
}
    ...
`)}

To extending functionality, and decouple from DOM, we need to implement a separate class with Observable pattern.

> Observables are declarative - that is, you define a function for publishing values, but a function won't be executed until a consumer subscribes to it. The subscribed consumer then receives notifications until the function completes, or until they unsubscribe.

To match basic observable, we need 4 methods *\`get()\`*, *\`set()\`*, *\`subscribe()\`*, *\`clear()\`* and of ourse *\`constructor()\`* to initialise class.

${codeWrapper(`
class Counter {
    private listeners: TCallback[];
    private scope: IScope;

    constructor() {
    }

    set() {
    }

    get() {
    }

    subscribe() {
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
    this.listeners.forEach((listener) => {
        listener(scope);
    });
}

get() {
    return this.scope;
}
...
`)}

Now, since we have *\`subscribe()\`* method, any time, we call *\`set()\`* method all listeners will receive notification callback, with a current scope as an argument.

Also *\`get()\`* method is useful when you need to know the current scope.

In context to React, we will use *\`get()\`* to initialise state in Component. And add the listener in *\`subscribe()\`* method, to setState.

${codeWrapper(`
// example from Lesson2.tsx
...
this.counter.update((scope: IScope) => {
    this.setState(scope);
});
...
`)}

So, here we are collecting listeners, with the *\`subscribe()\`* method.

A listener is a callback function, which takes *\`scope\`* as an argument. Because we use this callback function in several places in the class. We define type *\`Tcallback\`* (T for a Type, I for an Interface)

All listeners, (because they can be more than one) we collecting in Array, for using later to notify them, on the scope update.

${codeWrapper(`
...
update(listener: TCallback) {
    this.listeners = [...this.listeners, listener];
}

clear() {
    this.handlers = [];
}
...
`)}

Since we created a method to *\`subscribe()\`* we need to create a method to remove as well. Therefore there is *\`clear()\`* to remove all the handlers before we are removing a component.

Now, we have a class, with getters and setters. However, regards to the counter, there is no counter functionality yet.

Like I explained above, to avoid side effects, we are updating the entire Object, not a part of it.

${codeWrapper(`
...
add() {
    const {inputValue, totalValue} = this.scope;
    const result = inputValue + totalValue;
    this.set({inputValue, totalValue: result});
}

remove() {
    const {inputValue, totalValue} = this.scope;
    const result = totalValue - inputValue;
    this.set({inputValue, totalValue: result});
}

inputChange(value: number) {
    const {totalValue} = this.scope;
    this.set({inputValue: value, totalValue});
}
...
`)}

> There is a place for improvements but let's leave that for the Lesson3

Below we use *\`type TCallback = (scope: IScope) => void;\`*.

In Typescript *\`type\`* is similar to *\`interface\`* however there are subtle differences.

> "One difference is that interfaces create a new name that is used everywhere. Type aliases don’t create a new name — for instance, error messages won’t use the alias name. In the code below, hovering over interfaced in an editor will show that it returns an Interface, but will show that aliased returns object literal type."

> "A second more important difference is that type aliases cannot be extended or implemented from (nor can they extend/implement other types). Because an ideal property of software is being open to extension, you should always use an interface over a type alias if possible."

More on the subject [Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html)

Here is a full class.

${codeWrapper(`
export interface IScope {
    inputValue: number;
    totalValue: number;
}

type TCallback = (scope: IScope) => void;

class Counter {
    private listeners: TCallback[] = [];
    private scope: IScope;

    constructor(initialScope: IScope) {
        this.scope = initialScope;
    }

    add() {
        const {inputValue, totalValue} = this.scope;
        const result = inputValue + totalValue;
        this.set({inputValue, totalValue: result});
    }

    remove() {
        const {inputValue, totalValue} = this.scope;
        const result = totalValue - inputValue;
        this.set({inputValue, totalValue: result});
    }

    inputChange(value: number) {
        const {totalValue} = this.scope;
        this.set({inputValue: value, totalValue});
    }

    set(scope: IScope) {
        this.scope = scope;
        this.listeners.forEach((listener) => {
            listener(scope);
        });
    }

    get() {
        return this.scope;
    }

    update(listener: TCallback) {
        this.listeners = [...this.listeners, listener];
    }

    clear() {
        this.listeners = [];
    }
}

export const counter = (initialScope: IScope) => new Counter(initialScope);
`)}


In case you wonder about this line

*\`export const counter = (initialScope: IScope) => new Counter(initialScope);\`*

Initialising is done to avoid using *\`new\`* every time we are using a Counter component, kind of shortcut.


In Lesson2 class, we don't need to add any more methods. We connect (don't want to use the word *\`hook\`* :)) together *\`setState\`* and *\`counter.update\`*.

In Counter component, we initialise counter observable, with a new set of initial values. Next step is to add, those initial values to state Object in Component. Also, we need to subscribe to observable. This subscription will update state, any time we will make changes inside Observable.

${codeWrapper(`
...
const initialState: IScope = {
    inputValue: 5,
    totalValue: 0
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

In Lesson 1 our *\`inputWidget\`* had named methods which is ok for that example but what if we want to use them for something else? Let's abstract them! For that we change method name from *\`remove()\`* to *\`leftButtonHandler()\`* and hard-coded button label *\`Remove\`* to *\`{leftButtonLabel}\`*

That way we can pass any name for a label and with any method. That way we can make this component reusable somewhere else in the app with entirely different methods and labels.

> Whenever you create a new component think if you can make it reusable.


${codeWrapper(`

...
render() {
    const {inputValue, totalValue} = this.state;

    return (
        <div className={styles.Lesson2}>
            <h1>Lesson 2 - Simple Counter</h1>

            <h3>Counter Widget Demo</h3>

            <div className={styles.codeDemo}>
                <p className={styles.output}>Total: {totalValue}</p>
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

Now, we have reusable, stateless component, with custom labels, and no more named methods.

### Space to improve

In our tutorial, we are moving forward in small steps. Therefore some parts are missing, and you might notice that.

For example:
- We are not checking if a new object is the same.
- The *\`get()\`* method doesn't clone the object but return the same instance.
- Subscribe should return *\`remove()\`* method.

Our target is to implement a functional approach, and more code will become obsolete in the next lessons

`;

export const Description = () => {
    return (
        <React.Fragment>
            <MDConvert>{part1}</MDConvert>
            <p className="end">~ ~ ~ end ~ ~ ~</p>
        </React.Fragment>
    );
};
