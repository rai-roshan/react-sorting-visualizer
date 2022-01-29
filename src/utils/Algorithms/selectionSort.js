import Step from "../Step";
import { swap } from '../utils';

const defaultColor = "#ebe64d";
const checkColor = "#237033";
const compareColor = "#7700ff";
const swapColor = "#fc3a3a";
const overwriteColor = "#fc3a3a";
const finalColor = "#3ebd58";

export default function selectionSort(array) {
    console.log(array);
    let animation = [];
    const l = array.length;
    let i, j, min_index;

    for( i=0;i<l-1;i++){
        min_index = i;
        for( j=i+1;j<l;j++){
            animation.push(Step.compare([min_index, j]));
            if(array[j] < array[min_index]){
                min_index = j;
            }
        }
        if(min_index!==i) {
            swap(array, i, min_index);
            animation.push(Step.swap([i, array[i], min_index, array[min_index]]));
        }
        animation.push(Step.final([i]));
    }
    animation.push(Step.final([l-1]));
    console.log(array);
    return animation;
}

export const selectionSortOperations = [ ["default" , defaultColor] , ["compare", compareColor] , ["swap", swapColor] , ["final" , finalColor] ];

export const selectionSortDetails = "https://www.geeksforgeeks.org/selection-sort/";