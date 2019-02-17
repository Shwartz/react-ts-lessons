import React from 'react';
import {Ifn} from '../../lib/interfaces';

interface IProps {
    change: Ifn<void>
    add: Ifn<void>
    remove: Ifn<void>
    inputValue: number
}

export const InputWidget = ({change, add, remove, inputValue}: IProps) => {
    return (
        <React.Fragment>
            <input
                type="number"
                value={inputValue}
                onChange={({currentTarget}) => {change(currentTarget.value)}}/>
            <div>
                <button onClick={add}>Add {inputValue}</button>
                <button onClick={remove}>Remove {inputValue}</button>
            </div>
        </React.Fragment>
    )
};
