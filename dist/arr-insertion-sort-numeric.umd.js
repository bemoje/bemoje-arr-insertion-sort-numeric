(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/arr-swap'), require('@bemoje/assert-args'), require('@bemoje/assert-type')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/arr-swap', '@bemoje/assert-args', '@bemoje/assert-type'], factory) :
	(global = global || self, global['arr-insertion-sort-numeric'] = factory(global.arrSwap, global.assertArgs, global.assertType));
}(this, (function (arrSwap, assertArgs, assertType) { 'use strict';

	arrSwap = arrSwap && Object.prototype.hasOwnProperty.call(arrSwap, 'default') ? arrSwap['default'] : arrSwap;
	assertArgs = assertArgs && Object.prototype.hasOwnProperty.call(assertArgs, 'default') ? assertArgs['default'] : assertArgs;
	assertType = assertType && Object.prototype.hasOwnProperty.call(assertType, 'default') ? assertType['default'] : assertType;

	/**
	 * Sorting by insertion - Look for bigger numbers on the left side. Runtime: O(n^2). It starts from the 2nd element, and it tries to find any element (to the left) that could be bigger than the current index. It will move all the elements that are bigger and insert the current element where it belongs.
	 * @param {Array} arr - The array to sort
	 * @returns {Array} The sorted array
	 */
	function arrInsertionSortNumeric(arr) {
		assertArgs(arr);
		assertType(Array, arr);

		let right = 1;

		while (right < arr.length) {
			for (let left = right; arr[left - 1] > arr[left]; left--) {
				arrSwap(arr, left - 1, left);
			}
			right++;
		}

		return arr
	}

	return arrInsertionSortNumeric;

})));
