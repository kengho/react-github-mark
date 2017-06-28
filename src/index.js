import React, { Component } from 'react';

import GithubMarkRegular from '../images/GitHub-Mark-32px.png';
import GithubMarkLight from '../images/GitHub-Mark-Light-32px.png';

export default class extends Component {
  render() {
    let top;
    let left;
    let bottom = 0;
    let right = 0;
    switch (this.props.position) {
      case 'top-left':
        top = 0;
        left = 0;
        break;
      case 'top-right':
        top = 0;
        bottom = 0;
        break;
      case 'bottom-left':
        bottom = 0;
        left = 0;
        break;
      case 'bottom-right':
        bottom = 0;
        right = 0;
        break;
      default:
    }

    let GithubMark = GithubMarkRegular;
    if (this.props.light) {
      GithubMark = GithubMarkLight;
    }

    return (
      <div>
        <a
          href={this.props.href}
          style={{
            position: 'fixed',
            padding: '8px',
            width: '32px',
            height: '32px',
            top,
            left,
            bottom,
            right,
          }}
        >
          <img src={GithubMark} alt="GitHub" />
        </a>
      </div>
    );
  }
}
