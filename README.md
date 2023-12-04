# CHANID (Chan Lay ID)

[![npm version](https://badge.fury.io/js/chanid.svg)](https://www.npmjs.com/package/chanid)
![License](https://img.shields.io/github/license/chanmyaemaung/chanid)
[![npm downloads](https://img.shields.io/npm/dt/chanid.svg)](https://www.npmjs.com/package/chanid)

CHANID is a compact and robust utility for generating unique identifiers in JavaScript and TypeScript.

## Table of Contents

- [CHANID (Chan Lay ID)](#chanid-chan-lay-id)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Features](#features)
  - [API](#api)
  - [Example](#example)
  - [CDN Usage](#cdn-usage)
  - [Contributing](#contributing)
  - [License](#license)

## Installation

You can install CHANID via npm:

```bash
npm install chanid
```

## Usage

```js
// Import the CHANID class
const CHANID = require('chanid');

// Create an instance of CHANID
const chanid = new CHANID();

// Generate a unique identifier
const uniqueID = chanid.generateID();

console.log(uniqueID);
```

## Features

Generates unique identifiers based on the UUID format.
Works in both JavaScript and TypeScript environments.


## API
`generateID(): string`

Generates and returns a unique identifier.

## Example

```js
const CHANID = require('chanid');
const chanid = new CHANID();
const uniqueID = chanid.generateID();
console.log(uniqueID);
```

## CDN Usage

You can also include CHANID directly in your HTML file using a CDN:

```html
<!-- Latest version from jsDelivr (ECMAScript module) -->
<script type="module">
  import CHANID from 'https://cdn.jsdelivr.net/npm/chanid@1.1.0/build/chanid.mjs';

  const chanid = new CHANID();
  const uniqueID = chanid.generateID();
  console.log(uniqueID);
</script>

<!-- Latest version from jsDelivr (Minified script) -->
<script nomodule src="https://cdn.jsdelivr.net/npm/chanid@1.1.0/build/chanid.min.js"></script>
```

## Contributing

If you would like to contribute to CHANID, feel free to submit a pull request or open an issue.

## License

This project is licensed under the ISC License - see the `LICENSE.md` file for details.