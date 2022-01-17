import {useState, useEffect} from "react";
import selectionSort from "../../utils/selectionSort";
import Bar from './Bar';
import ChartLegend from "./Legend";
import {
    createRandomArray
} from '../../utils/utils';
import {
    clearAnimationIntervals,
    animateSorting,
    resetBarColor
} from '../../utils/animateSorting';

let animateIntervalIds = [];
let bars = [];

const ChartWrapper = () => {
    const [array, setArray] = useState( [] );

    function generateRandomGraph() {
        setArray( createRandomArray() );
    }

    useEffect(()=>{
        generateRandomGraph();
    }, [] );

    useEffect(()=>{
        bars = document.getElementsByClassName("bar");
        resetBarColor(bars);
        clearAnimationIntervals(animateIntervalIds);
    }, [array]);

    return <div id={"chart-wrapper"} className={"flex-xy-center"}>
        { array.map( (value, index) => {
            return <Bar
                key={`bar-no-${index}`}
                id={`bar-no-${index}`}
                height={ array[index] } />
            } )
        }
        <div className={'debug-bar'}>
            <button className={'debug-btn'} onClick={ () => { generateRandomGraph() } }>
                refresh
            </button>
            <button className={'debug-btn'} onClick={ ()=>{ animateSorting(selectionSort(array), bars, animateIntervalIds) } }>
                selection sort
            </button>
        </div>
        <ChartLegend array={array} />
    </div>
};

export default ChartWrapper;