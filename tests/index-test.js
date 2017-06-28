import expect from 'expect';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import Component from 'src/'

describe('Component', () => {
  let node;

  beforeEach(() => {
    node = document.createElement('div');
  })

  afterEach(() => {
    unmountComponentAtNode(node);
  })

  // I don't thing there are more tests needed.
  it('displays github mark', () => {
    render(<Component />, node, () => {
      expect(node.innerHTML).toContain('GitHub-Mark-32px');
    });
  })
})
