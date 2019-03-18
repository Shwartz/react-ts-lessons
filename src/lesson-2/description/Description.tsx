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

${codeWrapper(`
export interface IScope {
    inputValue: number;
    totalValue: number;
}

type TCallback = (scope: IScope) => void;
    ...
`)}

Before we start, let's add a definition for counter Object and Callback. Those two definitions will help us later, for tracking types.

Interface for counter Object contains inputValue, and totalValue. Both are integers, in typescript integer type is called \`number\`.

Type TCallback, will take as argument our defined counter object, and won't return anything.

As you notice, we are using *\`interface\`* and *\`type\`*. There is a subtle difference between both.

> *\`Interface\`* -  when you need to implement something. Should be Class, or just Object. Will help to understand the structure, and implementation rules.

> *\`Type\`* - Just rules, mostly when the same definition is used more than one time in the code, but you do not have to implement anything.

More on the subject [Advanced Types](https://www.typescriptlang.org/docs/handbook/advanced-types.html)

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

Scope and listeners initialised for privately handling class state.

In a *\`constructor\`*, we set *\`initialScope\`* which is mandatory.
*\`initialScope\`* is mandatory, because we need initial values, to display counter first time on screen.

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
    this.listeners = [];
}
...
`)}

Since we have a method  *\`subscribe()\`* to add listeners, we need to create a method to remove them as well. Therefore there is *\`clear()\`* method to remove all the listeners. We can call it, before we are removing a component.

To avoid side effects, we are updating the entire Object, not a part of it.

> Side effect - Object by nature is *Mutable*, and when anyone anywhere will make changes in the same Object, any reference to this Object, will also have changes. This means, your code is unpredictable, you don’t know, what’s actual value in Object at a particular state in the application. To avoid those problems, everything in code is “input and output”. Output always return a new instance.

> Regards to memory, and performance. Javascript garbage collector will destroy, all unused objects. Javascript is a speedy engine, still very questionable performance between creating a new object vs modifying an object. The current approach has apparent advantages versus controversial performance issues. I will copy the same article here: [React, Inline Functions, and Performance](https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578)

> Very big object manipulation is out of this scope. In short, large datasets usually are managed by chunks, and there are more complex techniques involved.

Now, we have a class, with getters and setters. However, regards to the counter, there is no counter functionality yet.


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


In Lesson2 class, we don't need to add any methods in \`Component\`. We will connect (don't want to use the word *\`hook\`* :)) \`Counter Class\` and \`Component\` together by joining *\`counter.subscribe\`* with  *\`this.setState\`*.

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
    this.counter.subscribe((scope: IScope) => {
        this.setState(scope);
    });
}
...
`)}

In Lesson 1 our *\`inputWidget\`* had named methods which is ok if component are not used anywhere, but what if we want to use them for something else? Let's abstract them! For that we change method name from *\`remove()\`* to *\`leftButtonHandler()\`* and hard-coded button label *\`Remove\`* to *\`{leftButtonLabel}\`*

That way we can pass any name for a label and with any method, and we can make this component reusable somewhere else in the app with entirely different methods and labels.

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
- Counter class contains not necessary methods.
- The *\`get()\`* method return same instance, should be \`Object.freeze\`.
- Subscribe should return *\`remove()\`* method, in case you want to unsubscribe from Observable.

Our target is to implement a functional approach, and some parts of code will become obsolete in the next few lessons.

`;

export const Description = () => {
    return (
        <React.Fragment>
            <MDConvert>{part1}</MDConvert>
            <p className="end">~ ~ ~ end ~ ~ ~</p>
        </React.Fragment>
    );
};
