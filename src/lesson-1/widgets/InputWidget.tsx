import React from 'react';
import {IfnNoArg, IfnOneArg} from '../../lib/interfaces';

interface IProps {
    change: IfnOneArg<number, void>;
    add: IfnNoArg<void>;
    remove: IfnNoArg<void>;
    inputValue: number;
}

export const InputWidget = ({change, add, remove, inputValue}: IProps) => {
    return (
        <React.Fragment>
            <input
                type="number"
                value={inputValue}
                onChange={({currentTarget}) => {
                    change(+currentTarget.value);
                }}
            />
            <div>
                <button onClick={add}>Add {inputValue}</button>
                <button onClick={remove}>Remove {inputValue}</button>
            </div>
        </React.Fragment>
    );
};
