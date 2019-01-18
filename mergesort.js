const array = [2, 1, 4, 6, 7, 9];

function split(wholeArray) {

    if(wholeArray.length === 1){
        return wholeArray
    };
    let middle = Math.floor(wholeArray.length / 2);
    let left = wholeArray.slice(0, middle);
    let right = wholeArray.slice(middle);
    //console.log(left, right);

    //return split(wholeArray);
    return [left, right];
  }

function merge(left, right){
    mergeArray = []
    if(left[0] > right[0]){
        mergeArray.push(right[0]);
        mergeArray.push(left[0]);
    }else{
        mergeArray.push(left[0]);
        mergeArray.push(right[0]);
    }
    console.log(mergeArray);
    return mergeArray;
}
function mergeSort(array) {
    let splitArray = split(array);
    if(splitArray[0].length === 1 && splitArray[1].length === 1){
        return merge(splitArray[0], splitArray[1]);
    } else{
        console.log('here');
        mergeSort(splitArray);
    };
    //return finalArray;
  };

console.log(mergeSort(array));