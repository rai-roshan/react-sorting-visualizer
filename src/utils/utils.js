const Step = require('./Step');

function swap(array, a, b) {
    const temp = array[a];
    array[a]=array[b];
    array[b]=temp;
}

function randomLength( minLimit=10 ) {
    const length = Math.max( minLimit, Math.floor(Math.random() * 100) );
    // console.log(length);
    return length;
}

function createRandomArray() {
    let array = [...Array(randomLength()+1).keys()].slice(1);
    for( let i=0;i<array.length;i++)
        array[i]=randomHeight();
    // console.log(array);
    return array;
}

function randomHeight( minLimit = 0) {
    const height = Math.max( minLimit, Math.floor(Math.random() * 100) );
    return height;
}

module.exports = {
    swap,
    createRandomArray
}