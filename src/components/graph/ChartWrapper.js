import {useEffect} from "react";
import Bar from './Bar';
import ChartLegend from "./Legend";
import {
    clearAnimationIntervals,
    resetBarColor
} from '../../utils/animateSorting';

const ChartWrapper = ( {animateIntervalIds, bars, array, generateRandomGraph} ) => {

    return <div id={"chart-wrapper"} >
        { array.map( (value, index) => {
            return <Bar
                key={`bar-no-${index}`}
                id={`bar-no-${index}`}
                height={ array[index] } />
            } )
        }
    </div>
};

export default ChartWrapper;