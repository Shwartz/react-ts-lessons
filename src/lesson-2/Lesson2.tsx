import React, {useState} from 'react';
import {Description} from './description/Description';
import {counterStorage, IScope} from './model/counterStorage';
import {InputWidget} from './widgets/InputWidget';

import styles from './Lesson2.module.scss';

const initialState: IScope = {
    inputValue: 5,
    totalValue: 0
};

const counter = counterStorage(initialState);

const Lesson2 = () => {
    const [{inputValue, totalValue}, setState] = useState(counter.get());
    counter.once((scope: IScope) => {
        setState(scope);
    });
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
                            counter.remove();
                        }
                    }
                    rightButtonLabel={`Add`}
                    rightButtonHandler={
                        () => {
                            counter.add();
                        }
                    }
                    inputValue={inputValue}
                    inputChange={
                        (value: number) => {
                            counter.inputChange(value);
                        }
                    }
                />
            </div>

            <Description/>
        </div>
    );
};

export default Lesson2;
