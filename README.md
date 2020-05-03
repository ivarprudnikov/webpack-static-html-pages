Static html pages with Webpack 4
================================

[![Build Status](https://travis-ci.com/ivarprudnikov/webpack-static-html-pages.svg?branch=master)](https://travis-ci.com/ivarprudnikov/webpack-static-html-pages)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![GitHub issues](https://img.shields.io/github/issues/ivarprudnikov/webpack-static-html-pages.svg)](https://github.com/ivarprudnikov/webpack-static-html-pages/issues)
[![GitHub last commit](https://img.shields.io/github/last-commit/ivarprudnikov/webpack-static-html-pages.svg)](https://github.com/ivarprudnikov/webpack-static-html-pages/commits/master)

[> PREVIEW LIVE](https://ivarprudnikov.github.io/webpack-static-html-pages/)
--------------------------------

This is a forkable example of static site (plain html/css/javascript)
assembled with webpack. You could also use this repository as a template when creating a new one.

Article explaining how this example was created: https://www.ivarprudnikov.com/static-website-multiple-html-pages-using-webpack-plus-github-example/

## Prerequisites

- [Install `node` (comes with `npm`)](https://nodejs.org/). Suggested version expressed in [.nvmrc](./.nvmrc) file.

## Development

- `npm i` - install dependencies
- `npm start` - start development server
- `npm test` - run minimal tests (eg: lint javascript files)
- `npm run cy:run` - run Cypress functional/browser/e2e tests. Works only when running website locally (`npm start` or `npm run preview`)

### Where are generated files?

In `development` mode `webpack` does not write generated files to disk, in order to change it
switch `devServer.writeToDisk` to `true` in [webpack.dev.js](./webpack.dev.js)

## Production

- `npm run build` to prepare `html`, `css`, `js` files in `dist/` directory
- `npm run preview` - run build and serve production files locally

Production build is built on [Travis CI](https://travis-ci.com/ivarprudnikov/webpack-static-html-pages) and saved in [`gh-pages` branch](https://github.com/ivarprudnikov/webpack-static-html-pages/tree/gh-pages) which in turn is hosted through Github pages https://ivarprudnikov.github.io/webpack-static-html-pages/

## Credits

- @lifenautjoe and his [webpack-starter-basic](https://github.com/lifenautjoe/webpack-starter-basic)
