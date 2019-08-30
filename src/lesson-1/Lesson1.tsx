import React, {useState} from 'react';
import {Description} from './description/Description';
import {InputWidget} from './widgets/InputWidget';

import css from './Lesson1.module.scss';

interface IProps {
}

interface IState {
    inputValue: number;
    totalValue: number;
}

const initialState: IState = {
    inputValue: 5,
    totalValue: 0
};

const Lesson1 = () => {
    const [state, setState] = useState(initialState);
    const add = () => {
        const {inputValue, totalValue} = state;
        const result = inputValue + totalValue;
        setState({inputValue, totalValue: result});
    };

    const remove = () => {
        const {inputValue, totalValue} = state;
        const result = totalValue - inputValue;
        setState({inputValue, totalValue: result});
    };

    const updateValue = (inputValue: number) => {
        const {totalValue} = state;
        setState({
            inputValue,
            totalValue
        });
    };

    const {inputValue, totalValue} = state;
    return (
        <div className={css.lesson1}>
            <h1>Lesson 1 - Simple Counter</h1>

            <h3>Counter Widget demo</h3>

            <div className={css.codeDemo}>
                <p className={css.output}>Total: {totalValue}</p>
                <InputWidget
                    add={() => {
                        add();
                    }}
                    remove={() => {
                        remove();
                    }}
                    inputValue={inputValue}
                    change={(val: number) => {
                        updateValue(val);
                    }}
                />
            </div>

            <Description/>
        </div>
    );
};

export default Lesson1;
