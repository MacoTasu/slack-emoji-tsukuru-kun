import React from 'react';
import ReactDOM from 'react-dom';
require('bootstrap/dist/css/bootstrap.css');

import { mountComponents } from 'react-sinatra-ujs';

import TextBox from './components/TextBox';
import Canvas from './components/Canvas';

// addEventListener('load', function() { mountComponents({ TextBox: TextBox, Canvas: Canvas }) }, false);
class Index extends React.Component {
  constructor(props) {
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <TextBox />
        <Canvas />
      </div>
    )
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('content')
);
