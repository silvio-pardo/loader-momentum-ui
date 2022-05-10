# loader-momentum-ui

> loader widget for cisco momentum-ui

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save loader-momentum-ui
```

## Usage

```tsx
import React from 'react';
import { Loader } from 'loader-momentum-ui';

class Example extends Component {
  render() {
    return <Loader />
  }
}
```
```tsx
// use the behavior subject to fire a new state "show the loader" or "hide the loader"
import { FireLoader } from 'loader-momentum-ui';
FireLoader.next(true);
```
## License

MIT © [silvio-pardo](https://github.com/silvio-pardo)
