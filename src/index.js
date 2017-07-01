import React, { Component } from 'react';

import GithubMarkRegular from '../images/GitHub-Mark-32px.png';
import GithubMarkLight from '../images/GitHub-Mark-Light-32px.png';

export default class extends Component {
  render() {
    const position = this.props.position || 'bottom-right';
    const padding = this.props.padding || '8px-8px';
    let GithubMark = GithubMarkRegular;
    if (this.props.light) {
      GithubMark = GithubMarkLight;
    }

    const propSplitRegExp = /([^-]+)-([^-]+)/;
    const parsedPosition = position.match(propSplitRegExp);
    const parsedPadding = padding.match(propSplitRegExp);

    const styleProps = {};

    if (parsedPosition && parsedPadding) {
      styleProps[parsedPosition[1]] = parsedPadding[1];
      styleProps[parsedPosition[2]] = parsedPadding[2];
    }

    return (
      <div>
        <a
          href={this.props.href}
          style={{
            ...styleProps,
            zIndex: '9999',
            position: 'fixed',
            width: '32px',
            height: '32px',
          }}
        >
          <img src={GithubMark} alt="GitHub" />
        </a>
      </div>
    );
  }
}
