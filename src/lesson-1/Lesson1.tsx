import React from 'react';
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
            const result = (+inputValue) + (+updateValue);
            return {inputValue, updateValue: result};
        });
    };

    remove() {
        this.setState((currentState: IState) => {
            const {inputValue, updateValue} = currentState;
            const result = (+updateValue) - (+inputValue);
            return {inputValue, updateValue: result};
        });
    };

    updateValue(value: number) {
        this.setState({
            inputValue: value
        });
    };

    render() {
        const {inputValue, updateValue} = this.state;

        return (
            <div className={styles.Lesson1}>
                <h1>Lesson 1 - Simple counter</h1>

                <h3>Description</h3>

                <h3>Example:</h3>
                <hr/>
                <p>Updated value: {updateValue}</p>
                <InputWidget
                    add={() => this.add()}
                    remove={() => this.remove()}
                    inputValue={inputValue}
                    change={(val) => this.updateValue(val)}
                />
                <hr/>
                <h3>Code samples:</h3>
            </div>
        );
    }
}

export default Lesson1;
