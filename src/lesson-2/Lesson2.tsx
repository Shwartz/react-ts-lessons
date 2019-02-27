import React, {Component} from 'react';
import {Description} from './description/Description';
import {counter, IScope} from './model/counter';
import {InputWidget} from './widgets/InputWidget';

import styles from './Lesson2.module.scss';

interface IProps {
    history: object;
    location: object;
    match: object;
    staticContext: undefined;
}

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

    render() {
        const {inputValue, updateValue} = this.state;

        return (
            <div className={styles.Lesson2}>
                <h1>Lesson 2 - Simple Counter</h1>

                <h3>Counter Widget Demo</h3>

                <div className={styles.codeDemo}>
                    <p className={styles.output}>Total: {updateValue}</p>
                    <InputWidget
                        leftButtonHandler={
                            () => {
                                this.counter.add();
                            }
                        }
                        rightButtonHandler={
                            () => {
                                this.counter.remove();
                            }
                        }
                        leftButtonLabel={`Remove`}
                        rightButtonLabel={`Add`}
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
}

export default Lesson2;
