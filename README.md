# Ecpl Image Viewer
[![Build Status](https://travis-ci.org/shameed/ecpl-image-viewer.svg?branch=master)](https://travis-ci.org/shameed/ecpl-image-viewer)
[![codecov](https://codecov.io/gh/shameed/ecpl-image-viewer/branch/master/graph/badge.svg)](https://codecov.io/gh/shameed/ecpl-image-viewer)
[![npm version](https://badge.fury.io/js/ecpl-image-viewer.svg)](http://badge.fury.io/js/ecpl-image-viewer)
[![devDependency Status](https://david-dm.org/shameed/ecpl-image-viewer/dev-status.svg)](https://david-dm.org/shameed/ecpl-image-viewer?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/shameed/ecpl-image-viewer.svg)](https://github.com/shameed/ecpl-image-viewer/issues)
[![GitHub stars](https://img.shields.io/github/stars/shameed/ecpl-image-viewer.svg)](https://github.com/shameed/ecpl-image-viewer/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/shameed/ecpl-image-viewer/master/LICENSE)

## Demo
https://shameed.github.io/ecpl-image-viewer/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

Angular4 library for image viewer in a popup

## Installation

Install through npm:
```
npm install --save ecpl-image-viewer
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { EcplImageViewerModule } from 'ecpl-image-viewer';

@NgModule({
  imports: [
    EcplImageViewerModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/shameed/ecpl-image-viewer/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/ecpl-image-viewer/bundles/ecpl-image-viewer.umd.js"></script>
<script>
    // everything is exported ecplImageViewer namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://shameed.github.io/ecpl-image-viewer/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and NPM
* Install local dev dependencies: `npm install` while current directory is this repo

### Development server
Run `npm start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `npm test` to run tests once or `npm run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
npm run release
```

## License

MIT
