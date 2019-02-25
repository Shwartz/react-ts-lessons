import * as Prism from 'prismjs';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export const Description = () => {
    setTimeout(() => {
        Prism.highlightAll();
    }, 0);

    const part1 = `

### Description:

We will use a simple Counter Widget with three methods such as Add, Remove, Input and show the Total amount after a calculation.

### What will you learn

 - How to use the *\`setState\`* method for *\`React.Component\`*
 - Use of Arrow functions (Lambdas) in *\`Render()\`* method and in props
 - Use of Typescript types for Stateless Components, interface definition and props


### Source

[https://github.com/Shwartz/react-ts-lessons/tree/master/src/lesson-1](https://github.com/Shwartz/react-ts-lessons/tree/master/src/lesson-1)

\`\`\`javascript
    ...
    add() {
        const {inputValue, updateValue} = this.state;
        const result = inputValue + updateValue;
        this.setState({inputValue, updateValue: result});
    }
    ...

\`\`\`

[ReactJS.org - using states correctly](https://reactjs.org/docs/state-and-lifecycle.html#using-state-correctly)
    `;

    return (
        <div>
            <ReactMarkdown source={part1}/>

            <p>To produce a counter we use main Class Lesson1 with methods add(), remove() and update(). The counter
                itself is a /widget/InputWidget.tsx.</p>

            <p>The main problem with this approach is that we can't easily reuse this widget. To reuse we need to copy
                all the methods and a widget to the needed Class. Clearly, this would create a lot of code
                duplication.</p>

            <p>This is our Lesson1 Class:</p>

            <pre>
                <code className="language-javascript">
{`
export class Lesson1 extends React.Component {

    constructor(props: IProps) {
        super(props);
    }

    state: IState = {
        inputValue: 5,
        updateValue: 0
    };

    add() {
        this.setState((currentState: IState) => {
            const {inputValue, updateValue} = currentState;
            const result = inputValue + updateValue;
            return {inputValue, updateValue: result};
        });
    }

    remove() {
        this.setState((currentState: IState) => {
            const {inputValue, updateValue} = currentState;
            const result = updateValue - inputValue;
            return {inputValue, updateValue: result};
        });
    }

    updateValue(value: number) {
        this.setState({
            inputValue: value
        });
    }

    render() {
        const {inputValue, updateValue} = this.state;
        return (
            <div className={styles.lesson1}>
                <h1>Lesson 1 - Simple counter</h1>

                <h3>Demo</h3>

                <div className={styles.codeDemo}>
                    <p className={styles.text}>Total: {updateValue}</p>
                    <InputWidget
                        add={() => this.add()}
                        remove={() => this.remove()}
                        inputValue={inputValue}
                        change={(val) => this.updateValue(val)}
                    />
                </div>

                <h3>Description:</h3>
                <Description/>
            </div>
        );
    }
}
`}
                </code>
            </pre>
            <p>InputWidget.tsx is a function where we passing values and callbacks. The component itself doesn't
                care about where it will be placed or how values will be calculated.</p>
            <pre>
                <code className="language-javascript">
{`
export const InputWidget = ({change, add, remove, inputValue}: IProps) => {
    return (
        <React.Fragment>
            <div>
                <Button
                    variant="contained"
                    onClick={add}
                >
                    Add {inputValue}
                </Button>
                <Button
                    variant="contained"
                    onClick={remove}
                >
                    Remove {inputValue}
                </Button>
            </div>
            <Input
                type="number"
                value={inputValue}
                onChange={({currentTarget}) => {
                    change(+currentTarget.value);
                }}
                className={styles.inputValue}
            />
        </React.Fragment>
    );
};
`}
                </code>
            </pre>
        </div>
    );
};