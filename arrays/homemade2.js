const points = [40, 100, 1, 5, 25, 10];
function myArrayMin(arr) {
    let len = arr.length;
    let min = infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  }console.log(myArrayMin(points));