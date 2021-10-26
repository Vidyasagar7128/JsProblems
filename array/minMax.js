var arr = new Array();

for (var i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 900) + 100;
    arr[i] = randomNum;
}
console.log("Array : " + arr);

var largest = Number.MIN_VALUE;
var secondLargest = Number.MIN_VALUE;
var smallest = Number.MAX_VALUE;
var secondSmallest = Number.MAX_VALUE;

for (var i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
    } else if (arr[i] > secondLargest) {
        secondLargest = arr[i];
    }

    if (arr[i] < smallest) {
        secondSmallest = smallest;
        smallest = arr[i];
    } else if (arr[i] < secondSmallest) {
        secondSmallest = arr[i];
    }
}
console.log("2nd largest element is: " + secondLargest);
console.log("2nd smallest element is: " + secondSmallest);