### What you will learn

 - How to use methods and `setState` inside `React.Component`
 - Render method and Arrow functions in `props`
 - Stateless Components, and interface definitions, for props, to follow typescript types.
 
### Methods in Class (React.Component)
 
> React.Component is simple Javascript Class.
> Stateless component is function, with return type React element. 

Important in Javascript class to define Prototype methods with `methodName(){}`, instead of `methodName = ()=>{}`. 
Second will assign default value by initialising Class.

Let's closer look for `setState` React. `setState by nature is async, which means there is no guaranteed execution order.
Many developers, when want to change values inside state, depending on current state values use this approach.

```typescript
    ...
    add() {
        const {inputValue, updateValue} = this.state;
        const result = inputValue + updateValue;
        this.setState({inputValue, updateValue: result});
    }
    ...

```

Technically, everything on this particular example will work fine, but if you will get habits, to use code this way,
in more complex applications, this not really good style. Because `this.state` could be different, on the time, when 
`setState` is trigerred.

More safe example is this.

```typescript
    ...
    add() {
        this.setState((currentState: IState) => {
            const {inputValue, updateValue} = currentState;
            const result = inputValue + updateValue;
            return {inputValue, updateValue: result};
        });
    }
    ...    
```

Use callback in `setState`, callback in API return current State as argument. and even in asynhronus applications, you are safe.

One another advantage, you not need `this` inside callback.

But, in places, where you are not depending on current state, perfectly fine to pass object in to `setState`.

```typescript
    ...
    updateValue(value: number) {
        this.setState({
            inputValue: value
        });
    }
    ...   
``` 

### Render method

> If you have concerns regards to arrow function performance, please read this [article](https://cdb.reacttraining.com/react-inline-functions-and-performance-bdff784f5578)
> I'll not explain this part again.

For visibility, I recommend, to define all state values on top of render function. 

Like this.

```typescript
    ...
    render() {
        const {inputValue, updateValue} = this.state;
    ...

```

Then inside `jsx` `inputValue={inputValue}` at some stage, if you want to move jsx template outside in some stateless 
component, you not need to make any changes, just add missing values in to `props`

Instead of passing methods to another React elements, or components, better to use callback inside component.
Also for class methods, you have to add `.bind(this)` which is not pure any more.

```typescript
 <InputWidget
        add={() => {
            this.add()
        }}
...

```

Because callbacks, not take return values, there is extra closure `()=>{this.add()}`, this not necessary perfectly fine 
to use `()=>this.add()` callback will ignore anyway.

If callback return arguments, I recommend for visibility, show returning type.

```typescript
    <InputWidget
    ...
        change={(val: number) => this.updateValue(val)}
    />

```

### Stateless Components.

In stateless components important to show props correctly, this will help to avoid extra type check, and typescript will show you all types.

In our widget, we have 3 callbacks, and one static value, which is number.

```typescript

interface IProps {
    change: (value: number) => void;
    add: () => void;
    remove: () => void;
    inputValue: number;
}

```
As you see, typescript taking value, with type `number`.

Inside components, we are using arrow functions as well, I explained  above.

```typescript
        <Button
                    variant="contained"
                    onClick={() => remove()}
                >
```
And on Input component `onChange` handler is more interesting.

```typescript
  <Input
  ...
    onChange={({currentTarget}) => change(+currentTarget.value)}
  ...
            />
```

`onChange` as argument return `React.ChangeEvent`, whre we are interested only on `currentTarget.value`, but this 
property return type is a `string`. We converting to `number` simply adding `+` before `+currentTarget.value`
