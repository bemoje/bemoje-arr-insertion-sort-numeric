# @bemoje/arr-insertion-sort-numeric

Sorting by insertion - Look for bigger numbers on the left side. Runtime: O(n^2). It starts from the 2nd element, and it tries to find any element (to the left) that could be bigger than the current index. It will move all the elements that are bigger and insert the current element where it belongs.

#### Version

<span><a href="https://npmjs.org/@bemoje/arr-insertion-sort-numeric" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/arr-insertion-sort-numeric" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/arr-insertion-sort-numeric" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-arr-insertion-sort-numeric.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/arr-insertion-sort-numeric" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-arr-insertion-sort-numeric.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/arr-insertion-sort-numeric" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/arr-insertion-sort-numeric" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-arr-insertion-sort-numeric/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-arr-insertion-sort-numeric" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/arr-insertion-sort-numeric
npm install --save @bemoje/arr-insertion-sort-numeric
npm install --save-dev @bemoje/arr-insertion-sort-numeric
```

## Usage

```javascript
import arrInsertionSortNumeric from '@bemoje/arr-insertion-sort-numeric'

arrInsertionSortNumeric([0, 2, 1])
//=> [0, 1, 2]

arrInsertionSortNumeric([])
//=> []

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### arrInsertionSortNumeric

Sorting by insertion - Look for bigger numbers on the left side. Runtime: O(n^2). It starts from the 2nd element, and it tries to find any element (to the left) that could be bigger than the current index. It will move all the elements that are bigger and insert the current element where it belongs.

##### Parameters

-   `arr` **[Array][3]** The array to sort

##### Returns
**[Array][3]** The sorted array

[1]: #arrinsertionsortnumeric

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array