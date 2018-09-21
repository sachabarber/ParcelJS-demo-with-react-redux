import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Main } from './Index';

if (window['module'] && window['module'].hot) {
  window['module'].hot.dispose(function() {});

  window['module'].hot.accept(function() {
    ReactDOM.render(<Main />, document.getElementById('root'));
  });
}

ReactDOM.render(<Main />, document.getElementById('root'));
