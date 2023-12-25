# CHANID (Chan Lay ID)

[![npm version](https://badge.fury.io/js/chanid.svg)](https://www.npmjs.com/package/chanid)
![License](https://img.shields.io/github/license/chanmyaemaung/chanid)
[![npm downloads](https://img.shields.io/npm/dt/chanid.svg)](https://www.npmjs.com/package/chanid)
[![Bundle Size](https://img.shields.io/bundlephobia/min/chanid)](https://bundlephobia.com/result?p=chanid)
[![TypeScript](https://img.shields.io/badge/-TypeScript-blue)](https://www.typescriptlang.org/)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg)](https://github.com/chanmyaemaung/chanid/issues)

CHANID is a minimalistic and efficient utility for generating unique identifiers in JavaScript and TypeScript. It can be seamlessly integrated into your projects, whether you're working with vanilla JavaScript or taking advantage of TypeScript's static typing.

## Table of Contents

- [CHANID (Chan Lay ID)](#chanid-chan-lay-id)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [CDN Usage](#cdn-usage)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

You can install CHANID via npm:

```bash
npm install chanid
```

## Usage

CHANID is very easy to use. Simply import the module and call the function to generate a unique identifier.

```js
// Import the CHANID function from the module
const chanid = require('chanid');

// Generate a unique identifier
const uniqueID = chanid();

console.log(uniqueID);
```

Note: If you are using TypeScript, you can use the import statement instead:
```js
// Import the CHANID function from the module
import chanid from 'chanid';

// Generate a unique identifier
const uniqueID = chanid();

console.log(uniqueID);
```

## Features

Generates unique identifiers based on the UUID format.
Works in both JavaScript and TypeScript environments.

## CDN Usage

You can also include CHANID directly in your HTML file using a CDN:

```html
<!-- Latest version from jsDelivr (ECMAScript module) -->
<script type="module">
  import chanid from 'https://cdn.jsdelivr.net/npm/chanid@1.2.6/dist/chanid.min.mjs';

  const uniqueID = chanid();
  console.log(uniqueID);
</script>

<!-- Latest version from jsDelivr (Minified script) -->
<script nomodule src="https://cdn.jsdelivr.net/npm/chanid@1.2.6/dist/chanid.min.js"></script>
```

## Contributing

If you would like to contribute to CHANID, feel free to submit a pull request or open an issue.

## License

This project is licensed under the ISC License - see the `LICENSE.md` file for details.