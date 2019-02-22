import {Button, Input} from '@material-ui/core';
import React from 'react';
import {Ifn} from '../../lib/interfaces';
import styles from './InputWidget.module.scss';

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
            <div className={styles.buttons}>
                <Button
                    variant="contained"
                    onClick={
                        () => {
                            leftButtonHandler();
                        }
                    }
                >Add {inputValue}
                </Button>
                <Button
                    variant="contained"
                    onClick={
                        () => {
                            rightButtonHandler();
                        }
                    }
                >Remove {inputValue}
                </Button>
            </div>
            <Input
                type="number"
                value={inputValue}
                onChange={
                    ({currentTarget: {value}}) => {
                        inputChange(value);
                    }}
                className={styles.inputValue}
            />
        </React.Fragment>
    );
};
