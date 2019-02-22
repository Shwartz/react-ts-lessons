import React from 'react';
import {IfnNoArg, IfnOneArg} from '../../lib/interfaces';

// This is example with predefined types.
/*interface IProps {
    change: IfnOneArg<number, void>;
    add: IfnNoArg<void>;
    remove: IfnNoArg<void>;
    inputValue: number;
}*/

// This is example with function definitions.
interface IProps {
    change: (value: number) => void;
    add: () => void;
    remove: () => void;
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
