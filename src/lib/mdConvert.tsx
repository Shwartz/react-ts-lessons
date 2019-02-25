import MarkdownIt from 'markdown-it';
import {highlight, languages} from 'prismjs';
import React from 'react';

const wrap = (content: string) => `<pre class="language-javascript">${content}</pre>`;
const md = new MarkdownIt({
    highlight(block: string) {
        return wrap(highlight(block, languages.javascript));
    }
});

const convert = (markdown: string) => md.render(markdown);

interface Iprops {
    children: string;
}

export const MDConvert = ({children}: Iprops) => (<div dangerouslySetInnerHTML={{__html: convert(children)}}/>);
