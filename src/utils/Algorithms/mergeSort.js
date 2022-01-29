import Step from "../Step";
import { swap } from '../utils';

const defaultColor = "#ebe64d";
const checkColor = "#237033";
const compareColor = "#7700ff";
const swapColor = "#fc3a3a";
const overwriteColor = "#fc3a3a";
const finalColor = "#3ebd58";

export default function mergeSort(array) {
    let animation = [];
    mergeSortUtil(array, 0, array.length-1, animation);

    for(let i=0;i<array.length;i++)
        animation.push(Step.final([i]));

    console.log(`merge sort : ${array}`);
    return animation;
}

function mergeSortUtil(array, begin, end, animation) {

    if(begin >= end)
        return ;

    const mid = Math.floor(begin+(end-begin)/2);
    mergeSortUtil(array, begin, mid, animation);
    mergeSortUtil(array, mid+1, end, animation);
    merge(array, begin, mid, end, animation);
}

function merge(array, begin, mid, end, animation) {
    let leftArrSize = mid-begin+1;
    let rightArrSize = end-mid;
    let leftArr = [];
    let rightArr = [];

    for(let ii=0;ii<leftArrSize;ii++){
        leftArr.push(array[ii+begin]);
    }
    for(let jj=0;jj<rightArrSize;jj++){
        rightArr.push(array[mid+1+jj]);
    }

    let i=0,j=0,k=begin;
    while(i<leftArrSize && j<rightArrSize) {
        animation.push(Step.compare([begin+i, mid+1+j]));
        if(leftArr[i] <= rightArr[j]){
            animation.push(Step.overwrite([k,leftArr[i]]));
            array[k] = leftArr[i];
            i++;
        }
        else {
            animation.push(Step.overwrite([k,rightArr[j]]));
            array[k] = rightArr[j];
            j++;
        }
        k++;
    }
    while(i<leftArrSize) {
        animation.push(Step.overwrite([k, leftArr[i]]));
        array[k++] = leftArr[i++];
    }
    while(j<rightArrSize) {
        animation.push(Step.overwrite([k, rightArr[j]]));
        array[k++] = rightArr[j++];
    }
}

// console.log(mergeSort(arr));
// module.exports = mergeSort;
export const mergeSortOperations = [ ["default" , defaultColor] , ["compare", compareColor] , ["overwrite", overwriteColor] , ["final" , finalColor] ];

export const  mergeSortDetails = "https://www.geeksforgeeks.org/merge-sort/";