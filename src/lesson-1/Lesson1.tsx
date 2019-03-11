import React, {Component} from 'react';
import {Description} from './description/Description';
import {InputWidget} from './widgets/InputWidget';

import css from './Lesson1.module.scss';

interface IProps {
}

interface IState {
    inputValue: number;
    totalValue: number;
}

class Lesson1 extends Component {

    constructor(props: IProps) {
        super(props);
    }

    state: IState = {
        inputValue: 5,
        totalValue: 0
    };

    private add() {
        this.setState((currentState: IState) => {
            const {inputValue, totalValue} = currentState;
            const result = inputValue + totalValue;
            return {inputValue, totalValue: result};
        });
    }

    private remove() {
        this.setState((currentState: IState) => {
            const {inputValue, totalValue} = currentState;
            const result = totalValue - inputValue;
            return {inputValue, totalValue: result};
        });
    }

    private totalValue(value: number) {
        this.setState({
            inputValue: value
        });
    }

    render() {
        const {inputValue, totalValue} = this.state;
        return (
            <div className={css.lesson1}>
                <h1>Lesson 1 - Simple Counter</h1>

                <h3>Counter Widget demo</h3>

                <div className={css.codeDemo}>
                    <p className={css.output}>Total: {totalValue}</p>
                    <InputWidget
                        add={() => {
                            this.add();
                        }}
                        remove={() => {
                            this.remove();
                        }}
                        inputValue={inputValue}
                        change={(val: number) => {
                            this.totalValue(val);
                        }}
                    />
                </div>

                <Description/>
            </div>
        );
    }
}

export default Lesson1;
