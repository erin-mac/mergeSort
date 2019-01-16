
function swap(val1, val2, array){
    console.log('call');
    let position1 = array.indexOf(val1);
    let position2 = array.indexOf(val2);
    array[position1] = val2;
    array[position2] = val1;
};

function bubbleSort(array) {
    let length = array.length;
    for(let i = 0; i < length; i++){
        if(array[i] > array[i+1]){
            swap(array[i], array[i+1], array)
        };
        length -= 1;
        console.log(length);
    };
    return array;
};
