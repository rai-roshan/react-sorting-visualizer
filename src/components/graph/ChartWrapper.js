import {useState} from "react";
import selectionSort from "../../utils/selectionSort";

const Bar = ({ height, id }) => <div id={id} className={"bar"} style={{ height: `${height*5}px` }}>

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
    const length = Math.floor(Math.random() * 10);
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

function animateSorting( steps ) {
    const bars = document.getElementsByClassName("bar");
    // console.log(`bars: ${bars}`);
    // console.log(bars[0]);
    // console.log(`animation steps : ${steps}`);

    let j = 0 ;
    for(let i=0;i<steps.length;i++){
        const step = steps[i];

        if( step.check ) {
            console.log(`check : ${step.data}`);
            setTimeout(()=>{
                document.getElementById(`bar-no-${step.data[0]}`).style.backgroundColor="#237033";
            }, ++j * 500);
            setTimeout(()=>{
                document.getElementById(`bar-no-${step.data[0]}`).style.backgroundColor="#3ebd58";
            }, (j * 500)+50);
        }
        else if( step.compare ) {
            console.log(`compare : ${step.data}`);
            setTimeout(()=>{
                document.getElementById(`bar-no-${step.data[0]}`).style.backgroundColor="#7700ff";
                document.getElementById(`bar-no-${step.data[1]}`).style.backgroundColor="#7700ff";
            }, ++j * 500);
            setTimeout(()=>{
                document.getElementById(`bar-no-${step.data[0]}`).style.backgroundColor="#3ebd58";
                document.getElementById(`bar-no-${step.data[1]}`).style.backgroundColor="#3ebd58";
            }, (j * 500)+50);
        }
        else if( step.swap ) {
            console.log(`swap : ${step.data}`);
            setTimeout(()=>{
                document.getElementById(`bar-no-${step.data[0]}`).style.backgroundColor="#6afcf0";
                document.getElementById(`bar-no-${step.data[2]}`).style.backgroundColor="#6afcf0";
                document.getElementById(`bar-no-${step.data[0]}`).style.height=`${step.data[1]*5}px`;
                document.getElementById(`bar-no-${step.data[2]}`).style.height=`${step.data[3]*5}px`;
            }, ++j * 500);
            setTimeout(()=>{
                document.getElementById(`bar-no-${step.data[0]}`).style.backgroundColor="#3ebd58";
                document.getElementById(`bar-no-${step.data[2]}`).style.backgroundColor="#3ebd58";
            }, (j * 500)+50);
        }
        else {
            console.log(`final : ${step.data}`);
            setTimeout(()=>{
                document.getElementById(`bar-no-${step.data[0]}`).style.backgroundColor="#008f18";
            }, ++j * 500);

        }
    }
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
                id={`bar-no-${index}`}
                height={ array[index] } />
        } )
        }
        <div className={'debug-bar'}>
            <button className={'debug-btn'} onClick={ generateRandomGraph }>
                refresh
            </button>
            <button className={'debug-btn'} onClick={ ()=>{ animateSorting(selectionSort(array)) } }>
                selection sort
            </button>
        </div>
        <ChartLegend array={array} />
    </div>
};

export default ChartWrapper;