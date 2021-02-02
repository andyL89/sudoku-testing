
import checkRow from './../src/sudoku.js';

describe('checkRow', () => {

  test('should return true or false for arrays that include duplicates', () => {
    const array = [1,2,3,4,5,6,7,8,9];
    const dupArray = [1,1,3,4,5,6,7,8,9];
    expect(checkRow(array)).toEqual(false);
    expect(checkRow(dupArray)).toEqual(true);
  });
});