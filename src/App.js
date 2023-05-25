import Timer from "./components/Timer";
import { Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Timer></Timer>}></Route>
        </Routes>
    </div>
  );
}

export default App;
