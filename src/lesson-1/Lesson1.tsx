import React from 'react';
import {Description} from './Description/Description';
import {InputWidget} from './widgets/InputWidget';

import styles from './Lesson1.module.scss';

interface IProps {
    history: object;
    location: object;
    match: object;
    staticContext: undefined;
}

interface IState {
    inputValue: number;
    updateValue: number;
}

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

export default Lesson1;
