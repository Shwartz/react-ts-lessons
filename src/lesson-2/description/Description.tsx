import React from 'react';
import {MDConvert} from '../../lib/mdConvert';

const part1 = `
### Description

This is the same Counter Widget with the same methods. However, we are going to abstract Labels and Namings for the widget which would give as reusable Widget. We will introduce the Model which will keep methods for the widget separate to avoid copy/paste when re-using widget.

### What will you learn

 - Create counter Class and move functionality outside Component
 - Handle communication between counter Class and Component

## Counter Class

Now we create counter class where we move, all counter functionality outside component.

> Here is advantage, if you decide to use React Native,
> or different DOM manipulation library or framework. Counter Class will not change.

This is only one small use case, but we try to show you idea, how to plan your application, to fit in to agile environment,
where functionality changes is day to day requirement.

Ok, because we are not yet in generic types, we will start on counter particular use case, in next lesson, we will make this
solution generic.

First we need Counter Object, where we collect \`inputValue\` and \`updatedValue\`
`;

export const Description = () => {
    return (
        <React.Fragment>
            <MDConvert>{part1}</MDConvert>
            <p className="end">~ ~ ~ end ~ ~ ~</p>
        </React.Fragment>
    );
};
