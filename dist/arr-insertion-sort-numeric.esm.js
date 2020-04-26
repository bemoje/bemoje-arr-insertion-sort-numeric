import arrSwap from '@bemoje/arr-swap';
import assertArgs from '@bemoje/assert-args';
import assertType from '@bemoje/assert-type';

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

export default arrInsertionSortNumeric;
