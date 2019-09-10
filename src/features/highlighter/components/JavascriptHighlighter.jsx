import React from 'react';
import PropTypes from 'prop-types';
import Lowlight from 'react-lowlight';
import js from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/dark.css';

Lowlight.registerLanguage('js', js);

const JavascriptHighlighter = ({ code }) => (
  <Lowlight language="js" value={code} />
);

JavascriptHighlighter.propTypes = {
  code: PropTypes.string.isRequired
};

export default JavascriptHighlighter;
