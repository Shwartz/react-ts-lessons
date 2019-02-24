import {Button, Input} from '@material-ui/core';
import React from 'react';
import {Ifn} from '../../lib/interfaces';
import styles from './InputWidget.module.scss';

interface IProps {
    change: (a: number) => void;
    add: Ifn<void>;
    remove: Ifn<void>;
    inputValue: number;
}

export const InputWidget = ({change, add, remove, inputValue}: IProps) => {
    return (
        <React.Fragment>
            <div className={styles.buttons}>
                <Button
                    variant="contained"
                    onClick={remove}
                >
                    Remove {inputValue}
                </Button>
                <Button
                    variant="contained"
                    onClick={add}
                >
                    Add {inputValue}
                </Button>
            </div>
            <Input
                type="number"
                value={inputValue}
                onChange={({currentTarget}) => {
                    change(+currentTarget.value);
                }}
                className={styles.inputValue}
            />
        </React.Fragment>
    );
};
