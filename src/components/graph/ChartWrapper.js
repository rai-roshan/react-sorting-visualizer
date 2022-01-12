import {useState} from "react";

const Bar = ({ height }) => <div className={"bar"} style={{ height: `${height*5}px` }}>

</div>

const ChartLegend = ({ array }) => {
    let maxVal = array[0] ? array[0] : 0;
    let minVal = array[0] ? array[0] : 0;

    array.forEach( (value, index) => {
       if( value > maxVal)
           maxVal = value;
       if( value < minVal)
           minVal = value;
    });

    return <div id={"legend"}>
        <span>height : value x 5 pix</span>
        <span>array length : {array.length}</span>
        <span>max value : {maxVal}</span>
        <span>max height : {maxVal*5} pixel</span>
        <span>min value : {minVal}</span>
        <span>min height : {minVal*5} pixel</span>
    </div>;
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

const ChartWrapper = () => {
    const [array, setArray] = useState( createRandomArray() );

    function generateRandomGraph() {
        setArray( createRandomArray() );
    }

    return <div id={"chart-wrapper"} className={"flex-xy-center"}>
        { array.map( (value, index) => {
            array[index] =  randomHeight();
            return <Bar
                key={`bar-no-${index}`}
                height={ array[index] } />
        } )
        }
        <button className={'debug-btn'} onClick={ generateRandomGraph }>
            refresh
        </button>
        <ChartLegend array={array} />
    </div>
};

export default ChartWrapper;