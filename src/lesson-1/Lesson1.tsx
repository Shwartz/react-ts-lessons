import React from 'react';
import styles from './Lesson1.module.scss';

interface IProps {

}

export class Lesson1 extends React.Component<IProps> {

    render() {
        return (
            <div>
                <p className={styles.test}>hjgkjhg jhg kjhg kjhg </p>
                <p className={styles.myTest}>Lesson 1</p>
            </div>
        );
    }
}

export default Lesson1;
