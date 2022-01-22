import {useEffect, useRef, useState} from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ChartWrapper from "./components/graph/ChartWrapper";
import ControllerBar from "./components/Controller/ControllerBar";
import {createRandomArray} from "./utils/utils";
import {clearAnimationIntervals, resetBarColor} from "./utils/animateSorting";

function App() {
    const animateIntervalIds = useRef([]);
    const bars = useRef([]);

    const [animationSpeed, setSpeed] = useState(null);
    const [algorithm, setAlgorithm] = useState(null);
    const [size, setSize] = useState(100);
    const [array, setArray] = useState( [] );

    function generateRandomGraph(size) {
        setArray( createRandomArray(size) );
    }

    useEffect(()=>{
        generateRandomGraph(size);
    }, [size] );

    useEffect(()=>{
        if(animateIntervalIds.current.length!==0)
            generateRandomGraph(size);
    }, [animationSpeed, algorithm]);

    useEffect(()=>{
        bars.current = document.getElementsByClassName("bar");
        resetBarColor(bars.current);
        console.log(`length : ${animateIntervalIds.current.length}`)
        if(animateIntervalIds.current.length!==0) {
            clearAnimationIntervals(animateIntervalIds);
        }
    }, [array]);

  return (
    <div id="app" className="flex-x-center">
        <NavBar
            algorithm={algorithm}
            setAlgorithm={setAlgorithm}
            size={size}
            setSize={setSize}
            animationSpeed={animationSpeed}
            setSpeed={setSpeed}
            clearAnimation={clearAnimationIntervals}
            animationIntervalIds={animateIntervalIds}
            generateRandomGraph={generateRandomGraph}
        />
        <ChartWrapper
            array={array}
            generateRandomGraph={generateRandomGraph}
            bars={bars}
            animateIntervalIds={ animateIntervalIds } />
        <ControllerBar
            size={size}
            array={array}
            generateRandomGraph={generateRandomGraph}
            bars={bars}
            animateIntervalIds={ animateIntervalIds }
            algorithm={algorithm}
            animationSpeed={animationSpeed} />
    </div>
  );
}

export default App;
