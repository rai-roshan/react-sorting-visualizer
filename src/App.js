import {useRef, useState} from "react";
import './App.css';
import ChartWrapper from "./components/graph/ChartWrapper";
import ControllerBar from "./components/Controller/ControllerBar";
import {createRandomArray} from "./utils/utils";

function App() {
    const animateIntervalIds = useRef([]);
    const bars = useRef([]);

    const [array, setArray] = useState( [] );

    function generateRandomGraph() {
        setArray( createRandomArray() );
    }

  return (
    <div id="app" className="flex-x-center">
        <ChartWrapper
            array={array}
            generateRandomGraph={generateRandomGraph}
            bars={bars}
            animateIntervalIds={ animateIntervalIds } />
        <ControllerBar
            array={array}
            generateRandomGraph={generateRandomGraph}
            bars={bars}
            animateIntervalIds={ animateIntervalIds }/>
    </div>
  );
}

export default App;
