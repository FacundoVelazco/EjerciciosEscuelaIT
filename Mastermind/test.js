let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

let shuffledNumbers = numbers.sort(function () {
  return Math.random() - 0.5;
});

console.log(shuffledNumbers);
// [7, 8, 3, 1, 5, 4, 2, 6]