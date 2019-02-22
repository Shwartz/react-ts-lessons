import React from 'react';
import {counter, IScope} from './model/counter';
import {InputWidget} from './widgets/InputWidget';

import styles from './Lesson2.module.scss';

interface IProps {
    history: object;
    location: object;
    match: object;
    staticContext: undefined;
}

const initialState = {
    inputValue: 5,
    updateValue: 0
};

export class Lesson2 extends React.Component {
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
                <h1>Lesson 2</h1>

                <h3>Demo</h3>

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

                        inputValue={inputValue}
                        inputChange={(value: number) => {
                            this.counter.inputChange(value);
                        }}
                    />
                </div>

                <h3>Description:</h3>
            </div>
        );
    }
}

export default Lesson2;
