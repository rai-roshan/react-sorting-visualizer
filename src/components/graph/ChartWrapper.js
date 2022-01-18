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

const ChartWrapper = ( {animateIntervalIds, bars} ) => {
    const [array, setArray] = useState( [] );

    function generateRandomGraph() {
        setArray( createRandomArray() );
    }

    useEffect(()=>{
        generateRandomGraph();
    }, [] );

    useEffect(()=>{
        bars.current = document.getElementsByClassName("bar");
        resetBarColor(bars.current);
        if(animateIntervalIds.current.length)
            clearAnimationIntervals(animateIntervalIds.current);
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
            <button className={'debug-btn'} onClick={ ()=>{ animateSorting(selectionSort(array), bars.current, animateIntervalIds.current) } }>
                selection sort
            </button>
        </div>
        <ChartLegend array={array} />
    </div>
};

export default ChartWrapper;