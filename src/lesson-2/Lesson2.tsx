import React, {Component} from 'react';
import {Description} from './description/Description';
import {counter, Counter, IScope} from './model/counter';
import {InputWidget} from './widgets/InputWidget';

import styles from './Lesson2.module.scss';

interface IProps {
}

const initialState: IScope = {
    inputValue: 5,
    totalValue: 0
};

class Lesson2 extends Component<IProps> {
    private counter: Counter;
    state: IScope;

    constructor(props: IProps) {
        super(props);
        this.counter = counter(initialState);
        this.state = this.counter.get();
        this.counter.update((scope: IScope) => {
            this.setState(scope);
        });
    }

    render() {
        const {inputValue, totalValue} = this.state;

        return (
            <div className={styles.Lesson2}>
                <h1>Lesson 2 - Simple Counter</h1>

                <h3>Counter Widget Demo</h3>

                <div className={styles.codeDemo}>
                    <p className={styles.output}>Total: {totalValue}</p>
                    <InputWidget
                        leftButtonLabel={`Remove`}
                        leftButtonHandler={
                            () => {
                                this.counter.remove();
                            }
                        }
                        rightButtonLabel={`Add`}
                        rightButtonHandler={
                            () => {
                                this.counter.add();
                            }
                        }
                        inputValue={inputValue}
                        inputChange={
                            (value: number) => {
                                this.counter.inputChange(value);
                            }
                        }
                    />
                </div>

                <Description/>
            </div>
        );
    }
}

export default Lesson2;
