const Step = require('./Step');

function swap(array, a, b) {
    const temp = array[a];
    array[a]=array[b];
    array[b]=temp;
}

function randomLength( minLimit=10 ) {
    const length = Math.floor(Math.random() * 100);
    console.log(length);
    return length < minLimit ? minLimit : length;
}

function createRandomArray() {
    return [...Array(randomLength()+1).keys()].slice(1);
}

function  randomHeight( minLimit = 0) {
    const height = Math.floor(Math.random() * 100);
    return height < minLimit ? minLimit : height;
}

module.exports = {
    swap,
    randomLength,
    createRandomArray,
    randomHeight
}