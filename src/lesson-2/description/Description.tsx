import * as Prism from 'prismjs';
import React from 'react';
import ReactMarkdown from 'react-markdown';

export const Description = () => {
    setTimeout(() => {
        Prism.highlightAll();
    }, 0);

    const part1 = `
### What you will learn

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

    const part2 = `
\`\`\`javascript
    interface IScope {
        inputValue: number;
        updateValue: number;
    }
\`\`\`
    `;

    return (
        <div>
            <ReactMarkdown source={part1}/>
            <ReactMarkdown source={part2}/>
        </div>
    );
};
