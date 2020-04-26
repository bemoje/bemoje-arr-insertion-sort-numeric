import arrInsertionSortNumeric from '../src/arr-insertion-sort-numeric'

describe('arrInsertionSortNumeric', () => {
	test('works', () => {
		const arr = [2, 3, 1]
		expect(arrInsertionSortNumeric(arr)).toStrictEqual([1, 2, 3])
		expect(arrInsertionSortNumeric([])).toStrictEqual([])
	})
})
