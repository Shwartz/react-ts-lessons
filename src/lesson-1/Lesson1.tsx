import React from 'react';
import {counter, IScope} from './model/counter';
import {InputWidget} from './widgets/InputWidget';

import styles from './Lesson1.module.scss';

interface IProps {

}

const appCounter = counter({
    inputValue: 5,
    updateValue: 5
});

export class Lesson1 extends React.Component<IProps> {
    state: IScope;

    constructor(props: IProps) {
        super(props);
        this.state = appCounter.get();
        appCounter.update((scope: IScope) => {
            this.setState(scope)
        })
    }

    render() {
        const {inputValue, updateValue} = this.state;

        return (
            <div>
                <h1>Lesson 1 - Simple counter</h1>

                <h3>Description</h3>
                <p>Lorem ipsum ...</p>

                <h3>Example:</h3>
                <hr/>
                <p>Updated value: {updateValue}</p>
                <InputWidget
                    add={appCounter.add}
                    remove={appCounter.remove}
                    inputValue={inputValue}
                    change={appCounter.inputChange}
                />
                <hr/>
                <h3>Code samples:</h3>
            </div>
        );
    }
}

export default Lesson1;
