import './App.css';
import ChartWrapper from "./components/graph/ChartWrapper";
import ControllerBar from "./components/Controller/ControllerBar";

function App() {
  return (
    <div id="app" className="flex-xy-center">
        <ChartWrapper />
        <ControllerBar />
    </div>
  );
}

export default App;
