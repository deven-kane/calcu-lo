import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactDOMServer from 'react-dom/server';
import pretty from 'pretty';
import prettier from 'prettier';
import beautify from 'js-beautify'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const rootHtml = ReactDOMServer.renderToString(<App />);
console.log('unformatted \n', rootHtml);

const prettyHtml = pretty(rootHtml);
console.log('pretty \n', prettyHtml);

const prettierHtml = prettier.format(rootHtml, {
  parser: 'html',
  tabWidth: 2,
  printWidth: 80,
  useTabs: false
});
console.log('prettier \n', prettierHtml);

// const jsb = beautify(rootHtml);
// console.log('beautify \n', jsb.html_beautify(rootHtml));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
