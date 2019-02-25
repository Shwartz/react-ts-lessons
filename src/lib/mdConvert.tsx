import MarkdownIt from 'markdown-it';
import * as Prism from 'prismjs';
import React from 'react';

const md = new MarkdownIt({
    highlight(block: string) {
        return Prism.highlight(block, Prism.languages.javascript);
    }
});

const convert = (markdown: string) => md.render(markdown);

interface Iprops {
    children: string;
}

export const MDConvert = ({children}: Iprops) => (<div dangerouslySetInnerHTML={{__html: convert(children)}}/>);
