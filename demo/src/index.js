import React, { Component } from 'react';
import { render } from 'react-dom';

import GithubMark from '../../src';

class Demo extends Component {
  render() {
    return (
      <div>
        <GithubMark
          href="http://www.example.com/default"
        />
        <GithubMark
          href="http://www.example.com/top-left"
          position="top-left"
          light
        />
        <GithubMark
          href="http://www.example.com/top-right"
          position="top-right"
        />
        <GithubMark
          href="http://www.example.com/bottom-left"
          position="bottom-left"
        />
        <GithubMark
          href="http://www.example.com/bottom-right"
          position="bottom-right"
        />
        <div style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'black',
        }}></div>
      </div>
    );
  }
}

render(<Demo/>, document.querySelector('#demo'));
