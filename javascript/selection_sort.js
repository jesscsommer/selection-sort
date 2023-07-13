function selectionSort(arr) {
  // type your code here
  const new_arr = []

  while (arr.length > 0) {
    const min = Math.min(...arr)
    const idx = arr.indexOf(min)

    new_arr.push(min)
    arr.splice(idx, 1)
  }

  return new_arr
}

if (require.main === module) {
  // add your own tests in here

  console.log("Expecting: [1, 2, 3, 4, 5, 10]");
  console.log("=>", selectionSort([10, 4, 3, 2, 1, 5]));


  console.log("Expecting: [-2, 1, 1, 2, 2, 4, 4, 20]");
  console.log("=>", selectionSort([1, 4, 2, 1, 2, 4, 20, -2]));

  console.log("Expecting:  [-2, -1, 2, 4]");
  console.log("=>", selectionSort([-1, -2, 4, 2]));

  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

// go through each elem in the arr 
// if it's less than the elem next to it, add it to beginning of new array