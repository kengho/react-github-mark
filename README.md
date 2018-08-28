# react-github-mark

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

## About

react-github-mark is an npm package that simply displays [octocat](https://github.com/octocat) in a screen corner which contains a link to your repo ([example](https://kengho.tech)). Package is bootstrapped using [nwb](https://github.com/insin/nwb).

## Installing

```
npm i react-github-mark
```

## Usage

### Basic

```
import GithubMark from 'react-github-mark';
...
<GithubMark href="https://www.example.com" />
```

### Props

```
<GithubMark
  ...
  href="https://www.example.com" // mandatory
  position="top-left"
  position="top-right"
  position="bottom-left"
  position="bottom-right" // default
  padding="8px-8px" // default
  light
  light={false} // default
  ...
/>
```

## Notes

According to [this](https://github.com/insin/nwb/issues/195#issuecomment-264089440) thread in order to use this package you have to use webpack and appropriate `file-loader` configuration in place (which is almost always true anyway).

## License

react-github-mark is distributed under the MIT-LICENSE.

[build-badge]: https://img.shields.io/travis/kengho/react-github-mark/master.png?style=flat-square
[build]: https://travis-ci.org/kengho/react-github-mark

[npm-badge]: https://img.shields.io/npm/v/react-github-mark.png?style=flat-square
[npm]: https://www.npmjs.org/package/react-github-mark

[coveralls-badge]: https://img.shields.io/coveralls/kengho/react-github-mark/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/kengho/react-github-mark
