const defaultOptions = {
  arrayOfColumns: false
};

const flip = (matrix = [], options = {}) => {
  options = { ...defaultOptions, ...options };

  if (options.arrayOfColumns) {
    return matrix.reverse(); // O(N)
  } else {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i] = matrix[i].reverse();
    }
    return matrix; // O(N*M)
  }
};

module.exports = flip;
