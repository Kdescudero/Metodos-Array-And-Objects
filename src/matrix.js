const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const matrix_x = [[10, 11, 12], [13, 14, 15], [16, 17, 18]];

const c = [...matrix[1], matrix_x[1][2], matrix_x[1][1]];
console.table(c);
