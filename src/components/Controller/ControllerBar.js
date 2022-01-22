import {animateSorting, animateSpeed} from "../../utils/animateSorting";
import selectionSort, {selectionSortOperations, selectionSortDetails} from "../../utils/selectionSort";
import mergeSort, {mergeSortOperations, mergeSortDetails} from "../../utils/mergeSort";
import bubbleSort, {bubbleSortOperations, bubbleSortDetails} from '../../utils/bubbleSort';
import quickSort, {quickSortOperations, quickSortDetails} from '../../utils/quickSort';


const ControllerBtns = ({ size, array, bars, animateIntervalIds, generateRandomGraph, algorithm, animationSpeed }) => {

    const handleAlgorithm = () => {
        console.log(`algo : ${algorithm}`);
        switch (algorithm) {
            case "bubble sort":
                animateSorting( bubbleSort(array), bars.current, animateIntervalIds.current, animateSpeed(animationSpeed));
                break;
            case "merge sort":
                animateSorting( mergeSort(array), bars.current, animateIntervalIds.current, animateSpeed(animationSpeed));
                break;
            case "selection sort":
                animateSorting( selectionSort(array), bars.current, animateIntervalIds.current, animateSpeed(animationSpeed));
                break;
            default:
                animateSorting( quickSort(array), bars.current, animateIntervalIds.current, animateSpeed(animationSpeed));
                break;
        }
    }

    return <div className={'debug-bar'}>
        <button className={'secondary-btn'} onClick={ () => { generateRandomGraph(size) } }>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
        </button>
        <button id={`play-btn`}
                onClick={ ()=>{ handleAlgorithm() } }>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
        </button>
        <button className={'secondary-btn'} onClick={ () => { generateRandomGraph(size) } }>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
            </svg>
        </button>
    </div>
}

const Description = ({ algorithm }) => {
    let operations = null;
    let detailsLink = null;
    switch (algorithm) {
            case "bubble sort":
                operations = bubbleSortOperations;
                detailsLink = bubbleSortDetails;
                break;
            case "merge sort":
                operations = mergeSortOperations;
                detailsLink = mergeSortDetails;
                break;
            case "selection sort":
                operations = selectionSortOperations;
                detailsLink = selectionSortDetails;
                break;
            default:
                operations = quickSortOperations;
                detailsLink = quickSortDetails;
        }

    return <div id={"dock"}>
        <div id={"operation-plate"}>
            { operations.map( (op, index) => <span key={index.toString()} className={"operation"}>
                <div className={"colorPlate"} style={{backgroundColor: op[1]}}></div>
                <div style={{marginLeft: "4px"}}>{`${op[0]}`}</div>
            </span>) }
        </div>
        <a href={detailsLink} target="_blank" id={"learn-more"}>
            learn more about algorithm here
        </a>
    </div>
}

const ControllerBar = ({ size, array, bars, animateIntervalIds, generateRandomGraph, algorithm, animationSpeed }) => {
    return <div id={"controller-bar"}>
        <ControllerBtns
            size={size}
            algorithm={algorithm}
            array={array}
            bars={bars}
            animateIntervalIds={animateIntervalIds}
            generateRandomGraph={generateRandomGraph}
            animationSpeed={animationSpeed} />
        <Description
        algorithm={algorithm} />
    </div>
}

export default ControllerBar;