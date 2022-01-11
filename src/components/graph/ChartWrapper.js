import {useState} from "react";

const Bar = ({ height }) => <div className={"bar"} style={{ height: `${height*5}px` }}>

</div>

function randomLength( minLimit=10 ) {
    return minLimit + Math.floor(Math.random() * 5000);
}

function createRandomArray() {
    return [...Array(randomLength()+1).keys()].slice(1);
}

function  randomHeight( minLimit = 1) {
    return minLimit + Math.floor(Math.random() * 100);
}

const ChartWrapper = () => {
    const [array, setArray] = useState( createRandomArray() );

    function generateRandomGraph() {
        setArray( createRandomArray() );
    }

    return <div id={"chart-wrapper"} className={"flex-xy-center"}>
        { array.map( (value, index) => (
            <Bar key={`bar-no-${index}`} height={randomHeight()} />
        ) )
        }
        <button className={'debug-btn'} onClick={ generateRandomGraph }>
            random array
        </button>
    </div>
};

export default ChartWrapper;