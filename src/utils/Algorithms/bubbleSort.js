import Step from "../Step";
import { swap } from '../utils';

const defaultColor = "#ebe64d";
const checkColor = "#237033";
const compareColor = "#7700ff";
const swapColor = "#fc3a3a";
const overwriteColor = "#fc3a3a";
const finalColor = "#3ebd58";

export default function bubbleSort( array ) {
    let animation = [];
    let i,j;
    const length = array.length;
    for( i=0;i<length-1;i++){
        //the largest value is placed at its correct place
        let swapped = false;
        for(j=0;j<length-1-i;j++){
            animation.push(Step.compare( [j, j+1] ));
            if( array[j] > array[j+1] ){
                swapped = true;
                animation.push(Step.swap( [j, array[j+1], j+1, array[j]] ));
                swap(array, j, j+1);
            }
        }
        animation.push(Step.final([length-1-i]));
        if( swapped===false ){
            // if( animation.length===0 ){
                for(let k=length-i-1;k>=0;k--)
                    animation.push(Step.final( [k]))
            // }
            console.log(array);
            return animation;
        }
    }

    console.log(array);
    return animation;
}

export const bubbleSortOperations = [ ["default" , defaultColor] , ["compare", compareColor] , ["swap", swapColor] , ["final" , finalColor] ];

export const bubbleSortDetails = "https://www.geeksforgeeks.org/bubble-sort/";