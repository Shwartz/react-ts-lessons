import React from 'react';
import {codeWrapper, MDConvert} from '../../lib/mdConvert';

const part1 = `
### Description

~ work in progress ~

`;

export const Description = () => {
    return (
        <React.Fragment>
            <MDConvert>{part1}</MDConvert>
            <p className="end">~ ~ ~ end ~ ~ ~</p>
        </React.Fragment>
    );
};
