import React from 'react';
import PropTypes from 'prop-types';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

SyntaxHighlighter.registerLanguage('javascript', js);

const JavascriptHighlighter = ({ children }) => (
  <SyntaxHighlighter language="javascript" style={dark}>
    {children}
  </SyntaxHighlighter>
);

JavascriptHighlighter.propTypes = {
  children: PropTypes.node.isRequired
};

export default JavascriptHighlighter;
