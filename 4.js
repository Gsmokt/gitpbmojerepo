'use strict';
class Matrix {
  constructor(arr1, arr2) {
    this.arr1 = arr1;
    this.arr2 = arr2;
  }
  matrixMultiplication(arg1 = this.arr1, arg2 = this.arr2) {
    const condition = arg1.every((e) => e.length === arg2.length);
    if (!condition)
      return "The number of columns in the first array must equal the number of rows in the second array";
    const result = arg1.flatMap((e, i) =>
      arg2[0].map((_, ind) => {
        let n = 0;
        e.map((_, index) => (n += arg1[i][index] * arg2[index][ind]));
        return n;
      })
    );
    return result;
  }
}

const NewMatrix = new Matrix(
  [
    [1, 2, 3, 8],
    [3, 4, 5, 7],
  ],
  [
    [1, 2],
    [4, 5],
    [3, 5],
    [7, 9],
  ]
);
console.log(NewMatrix.matrixMultiplication());
