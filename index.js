const flip = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = matrix[i].reverse();
  }
  return matrix;
};
// O(N*M)
module.exports = flip;
