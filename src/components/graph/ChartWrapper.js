import {useState, useEffect} from "react";
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

function animateSorting( steps, bars ) {
    // console.log(`bars: ${bars}`);
    // console.log(bars[0]);
    // console.log(`animation steps : ${steps}`);

    let j = 0 ;
    const animateDelay = 50;
    for(let i=0;i<steps.length;i++){
        const step = steps[i];

        if( step.check ) {
            console.log(`check : ${step.data}`);
            setTimeout(()=>{
                document.getElementById(`bar-no-${step.data[0]}`).style.backgroundColor="#237033";
            }, ++j * animateDelay);
            setTimeout(()=>{
                document.getElementById(`bar-no-${step.data[0]}`).style.backgroundColor="#3ebd58";
            }, (++j * animateDelay));
        }
        else if( step.compare ) {
            console.log(`compare : ${step.data}`);
            setTimeout(()=>{
                document.getElementById(`bar-no-${step.data[0]}`).style.backgroundColor="#7700ff";
                document.getElementById(`bar-no-${step.data[1]}`).style.backgroundColor="#7700ff";
            }, ++j * animateDelay);
            setTimeout(()=>{
                document.getElementById(`bar-no-${step.data[0]}`).style.backgroundColor="#3ebd58";
                document.getElementById(`bar-no-${step.data[1]}`).style.backgroundColor="#3ebd58";
            }, (++j * animateDelay));
        }
        else if( step.swap ) {
            console.log(`swap : ${step.data}`);
            setTimeout(()=>{
                document.getElementById(`bar-no-${step.data[0]}`).style.backgroundColor="#6afcf0";
                document.getElementById(`bar-no-${step.data[2]}`).style.backgroundColor="#6afcf0";
                document.getElementById(`bar-no-${step.data[0]}`).style.height=`${step.data[1]*5}px`;
                document.getElementById(`bar-no-${step.data[2]}`).style.height=`${step.data[3]*5}px`;
            }, ++j * animateDelay);
            setTimeout(()=>{
                document.getElementById(`bar-no-${step.data[0]}`).style.backgroundColor="#3ebd58";
                document.getElementById(`bar-no-${step.data[2]}`).style.backgroundColor="#3ebd58";
            }, (++j * animateDelay));
        }
        else {
            console.log(`final : ${step.data}`);
            setTimeout(()=>{
                document.getElementById(`bar-no-${step.data[0]}`).style.backgroundColor="#008f18";
            }, ++j * animateDelay);

        }
    }
}

const ChartWrapper = () => {
    const [array, setArray] = useState( createRandomArray() );
    let bars = [];

    function generateRandomGraph( bars ) {
        //============stop previous animation=========
        console.log(bars);
        setArray( createRandomArray() );
        for(let i=0;i<bars.length;i++){
            document.getElementById(`bar-no-${i}`).style.backgroundColor="#3ebd58";
        }
    }

    useEffect(()=>{
        bars = document.getElementsByClassName("bar");
    }, []);

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
            <button className={'debug-btn'} onClick={ () => { generateRandomGraph(bars) } }>
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