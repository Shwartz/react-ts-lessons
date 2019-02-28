import {Button, Input} from '@material-ui/core';
import React, {Fragment} from 'react';
import styles from './InputWidget.module.scss';

interface IProps {
    leftButtonLabel: string;
    leftButtonHandler: () => void;
    rightButtonLabel: string;
    rightButtonHandler: () => void;
    inputValue: number;
    inputChange: (value: number) => void;
}

export const InputWidget = (
    {
        leftButtonLabel,
        leftButtonHandler,
        rightButtonLabel,
        rightButtonHandler,
        inputValue,
        inputChange
    }: IProps) => {

    return (
        <Fragment>
            <div className={styles.buttons}>
                <Button
                    variant="contained"
                    onClick={() => {
                        leftButtonHandler();
                    }}
                >{leftButtonLabel} {inputValue}
                </Button>
                <Button
                    variant="contained"
                    onClick={() => {
                        rightButtonHandler();
                    }}
                >{rightButtonLabel} {inputValue}
                </Button>
            </div>
            <Input
                type="number"
                value={inputValue}
                onChange={
                    ({currentTarget: {value}}) => {
                        inputChange(+value);
                    }}
                className={styles.inputValue}
            />
        </Fragment>
    );
};
