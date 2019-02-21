import React from 'react';
import {Ifn} from '../../lib/interfaces';

interface IProps {
    inputChange: Ifn<void>;
    leftButtonHandler: Ifn<void>;
    rightButtonHandler: Ifn<void>;
    inputValue: number;
}

export const InputWidget = (
    {
        inputChange,
        leftButtonHandler,
        rightButtonHandler,
        inputValue
    }: IProps) => {
    return (
        <React.Fragment>
            <input
                type="number"
                value={inputValue}
                onChange={
                    ({currentTarget: {value}}) => {
                    inputChange(value);
                }}
            />
            <div>
                <button onClick={
                    () => {
                        leftButtonHandler()
                    }
                }>Add {inputValue}</button>
                <button onClick={
                    () => {
                        rightButtonHandler()
                    }
                }>Remove {inputValue}</button>
            </div>
        </React.Fragment>
    );
};
