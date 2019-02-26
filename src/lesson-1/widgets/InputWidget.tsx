import {Button, Input} from '@material-ui/core';
import React, {Fragment} from 'react';
import styles from './InputWidget.module.scss';

interface IProps {
    change: (value: number) => void;
    add: () => void;
    remove: () => void;
    inputValue: number;
}

export const InputWidget = ({change, add, remove, inputValue}: IProps) => {
    return (
        <Fragment>
            <div className={styles.buttons}>
                <Button
                    variant="contained"
                    onClick={() => {
                        remove();
                    }}
                >
                    Remove {inputValue}
                </Button>
                <Button
                    variant="contained"
                    onClick={() => {
                        add();
                    }}
                >
                    Add {inputValue}
                </Button>
            </div>
            <Input
                type="number"
                value={inputValue}
                onChange={({currentTarget}) => {
                    return change(+currentTarget.value);
                }}
                className={styles.inputValue}
            />
        </Fragment>
    );
};
