



function generateArray(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}

console.log(generateArray(4, 7)); // Output: [4, 5, 6, 7]
console.log(generateArray(-4, 7)); // Output: [-4, -3, -2, -1, 0, 1, 2,