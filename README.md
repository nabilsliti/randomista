## Randomista
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)  [![npm version](https://img.shields.io/badge/version-0.0.1-green.svg)](https://www.npmjs.com/package/randomista)

`Randomista` is a TypeScript library designed to simplify the generation of random data for a variety of use cases. Whether you're testing, prototyping, or adding a touch of unpredictability to your applications, Randomista has you covered.

### Installation
```
$ npm install randomista --save
```
## Features
- **Data Generation from json schema**: Easily generate a random date from json schema
- **Versatile Data Generation**: Easily create random 
  - `numbers`,
  - `strings`,
  - `users`,
  - `emails`,
  - `dates` (date, dateTime and time with multi formats),
  - `payments` (credit card detail, credit card number),
  - `ip addresses`,
  - `uuids`,
  - `urls`,
  - `booleans`,
  - `addresses`,
  - `countries`,
  - `countries code`,
  - `cities`,
  - `streets`,
  - `zip codes` (with 5d and 9d format),
  - `currencies`,
  - `colors` (with name, hex and rgb format)
  - `custom`: (generate random data from given value)
  - and more...


- **Structured and Realistic**: Utilize functions with structured interfaces for diverse and realistic data.

- **Easy Integration**: Seamlessly integrate randomness into your projects with straightforward functions.
  
## API Documentation

See Full [API documentation](https://nabilsliti.github.io/randomista/).

### Use

```js
import * as randomista from "randomista";
const randomista = require("randomista");
```

### License
Licensed under [MIT](./LICENSE).