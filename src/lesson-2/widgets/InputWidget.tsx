import {Button, Input} from '@material-ui/core';
import React from 'react';
import {Ifn} from '../../lib/interfaces';
import styles from './InputWidget.module.scss';

interface IProps {
    inputChange: Ifn<void>;
    leftButtonHandler: Ifn<void>;
    leftButtonLabel: string;
    rightButtonHandler: Ifn<void>;
    rightButtonLabel: string;
    inputValue: number;
}

export const InputWidget = (
    {
        inputChange,
        leftButtonHandler,
        leftButtonLabel,
        rightButtonHandler,
        rightButtonLabel,
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
                >{leftButtonLabel} {inputValue}
                </Button>
                <Button
                    variant="contained"
                    onClick={
                        () => {
                            rightButtonHandler();
                        }
                    }
                >{rightButtonLabel} {inputValue}
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
