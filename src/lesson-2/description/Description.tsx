import * as Prism from 'prismjs';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export const Description = () => {
    setTimeout(() => {
        Prism.highlightAll();
    }, 0);

    const part1 = `
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

First we need Counter Object, where we collect \`inputValue\` and \`updatedValue\`
`;

    const part2 = `
\`\`\`javascript
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
\`\`\`
    `;

    return (
        <div>
            <ReactMarkdown source={part1}/>
            <ReactMarkdown source={part2}/>
        </div>
    );
};
