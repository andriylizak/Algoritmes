const N = 67;
const array = [];
for (let i = 0; i < N; i++) {
  array.push(Math.floor(Math.random() * 51)); 
}
console.log("Початковий масив:");
console.log(array);
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // обмін
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
}

bubbleSort(array);
console.log("\nВідсортований масив:");
console.log(array);
function removeDuplicates(sortedArr) {
  const uniqueArr = [];
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] !== sortedArr[i + 1]) {
      uniqueArr.push(sortedArr[i]);
    }
  }
  return uniqueArr;
}
const uniqueArray = removeDuplicates(array);
console.log("\nМасив без повторів:");
console.log(uniqueArray);
