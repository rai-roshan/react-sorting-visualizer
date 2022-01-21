import Step from "./Step";
import { swap } from './utils';

function partition(array, low, high, animation) {
    const pivot = array[high];
    let i = low-1;
    for( let j=low;j<=high-1;j++){
        animation.push(Step.compare([j, high]));
        if(array[j] < pivot) {
            i++;
            swap(array, i, j);
            animation.push(Step.swap([i, array[i], j, array[j] ]));
        }
    }
    swap(array, i+1, high);
    animation.push(Step.swap( [i+1, array[i+1], high, array[high]] ));
    animation.push(Step.final([i+1]));
    return i+1;
}

function quickSortUtil(array, low, high, animation) {
    if(low < high) {
        const pi = partition(array, low, high, animation); //place pivot( array[pi] ) at its correct place
        quickSortUtil(array, low, pi-1, animation);
        quickSortUtil(array, pi+1, high, animation);
    }
    else if(low===high) {
        animation.push(Step.final([low]));
    }
}

export default function quickSort( array ) {
    let animation = [];
    quickSortUtil(array, 0, array.length-1, animation);
    console.log(array);
    return animation;
}

// const arr = [10, 7, 8, 9, 1, 5];
// quickSort(arr);
