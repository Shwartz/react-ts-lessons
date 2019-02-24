import {Button, Input} from '@material-ui/core';
import React, {Fragment} from 'react';
import styles from './InputWidget.module.scss';

interface IProps {
    leftButtonHandler: () => void;
    leftButtonLabel: string;
    rightButtonHandler: () => void;
    rightButtonLabel: string;
    inputChange: (value: number) => void;
    inputValue: number;
}

export const InputWidget = (
    {
        leftButtonHandler,
        leftButtonLabel,
        rightButtonHandler,
        rightButtonLabel,
        inputChange,
        inputValue
    }: IProps) => {
    return (
        <Fragment>
            <div className={styles.buttons}>
                <Button
                    variant="contained"
                    onClick={() => leftButtonHandler()}
                >{leftButtonLabel} {inputValue}
                </Button>
                <Button
                    variant="contained"
                    onClick={() => rightButtonHandler()}
                >{rightButtonLabel} {inputValue}
                </Button>
            </div>
            <Input
                type="number"
                value={inputValue}
                onChange={
                    ({currentTarget: {value}}) => inputChange(+value)}
                className={styles.inputValue}
            />
        </Fragment>
    );
};
