import {useRef} from "react";
import './App.css';
import ChartWrapper from "./components/graph/ChartWrapper";
import ControllerBar from "./components/Controller/ControllerBar";

function App() {
    const animateIntervalIds = useRef([]);
    const bars = useRef([]);

  return (
    <div id="app" className="flex-x-center">
        <ChartWrapper
            bars={bars}
            animateIntervalIds={ animateIntervalIds } />
        <ControllerBar />
    </div>
  );
}

export default App;
