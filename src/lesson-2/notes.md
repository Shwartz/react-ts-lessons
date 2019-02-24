### What you will learn

 - Create counter Class and move functionality outside Component
 - Handle communication between counter Class and Component

## Counter Class

Now we create counter class where we move, all counter functionality outside component. 

> Here is advantage, if you decide to use React Native, 
> or different DOM manipulation library or framework. Counter Class will not change.

This is only one small use case, but we try to show you idea, how to plan your application, to fit in to agile environment,
where functionality changes is day to day requirement.

Ok, because we are not yet in generic types, we will start on counter particular use case, in next lesson, we will make this 
solution generic.

First we need Counter Object, where we collect `inputValue` and `updatedValue`


```typescript

    interface IScope {
        inputValue: number;
        updateValue: number;
    }

```

Later, we convert this to generic type.

Now, for counter need `get`, `set`, `update` methods, and `clear` in case you not need counter any more. 
And of course constructor, to initialise class.

```typescript

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
}

```

`scope` and `handlers` initialised for handling class state.


In constructor we set `initialScope` which is mandatory

```typescript

  constructor(initialScope: IScope) {
        this.scope = initialScope;
    }

```

Then methods `get` and `set` will handle scope updates.

```typescript
set(scope: IScope) {
        this.scope = scope;
        this.handlers.forEach((handler) => {
            handler(scope);
        });
    }

    get() {
        return this.scope;
    }
```

Bear in mind, any time we set new scope, we notify handlers as well.

Now we collecting listeners, with update method.

```typescript

    update(handler: TCallback) {
        this.handlers = [...this.handlers, handler];
    }

    clear() {
        this.handlers = [];
    }

```

Also, important, if we have something to add, need availability to clear too.

Now, we have a class, with getters and setters. But regards to counter, there is no counter functionality.

Let's add methods for counter.

`add` will be similar like we did in component, except, we will update entire scope object, not part.


```typescript

   add() {
        const {inputValue, updateValue} = this.scope;
        const result = inputValue + updateValue;
        this.set({inputValue, updateValue: result});
    }

```

Same with another methods.

```typescript

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

```

> Possibly looks these methods, can optimise, and you are right. But we cover this in next lessons.

Ok, Full Counter class is there.

```typescript

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


```

Possibly you spot this line.

```typescript

export const counter = (initialScope: IScope) => new Counter(initialScope);

```

We just doing shortCut, to avoid adding `new` in counter.

Ok, in Constructor we not eed methods any more. We just hook together `setState` and `counter.update` together.

```typescript

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
```

One more thing, we initialise counter with initial State. 
With `this.state = this.counter.get();` we bind, initial values from counter class.

Now, for inputWidget, we expose counter class methods to buttons.

```typescript

    render() {
        const {inputValue, updateValue} = this.state;

        return (
            <div className={styles.Lesson2}>
                <h1>Lesson 2</h1>

                <h3>Demo</h3>

                <div className={styles.codeDemo}>
                    <p className={styles.output}>Total: {updateValue}</p>
                    <InputWidget
                        leftButtonLabel="Remove"
                        leftButtonHandler={() => this.counter.remove()}
                        rightButtonLabel="Add"
                        rightButtonHandler={() => this.counter.add()}
                        inputChange={(value: number) => this.counter.inputChange(value)}
                        inputValue={inputValue}
                    />
                </div>

                <h3>Description:</h3>
            </div>
        );
    }

```

Also in buttons, we added labels, and rename them to leftButton and rightButton. To show, how this widget, 
could be used in outside counter app.

Now, you can use, counter somewhere else. Even if counter is asynchronous, you no need to change component.
