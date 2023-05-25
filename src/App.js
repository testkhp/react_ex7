import Timer from "./components/Timer";
import Slider from "./components/Slider";
import { Routes,Route, Link} from "react-router-dom"
function App() {
  return (
    <div className="App">
        <Link to="/">타이머</Link>
        <Link to="/sub">슬라이드</Link>
        <Routes>
            <Route path="/" element={<Timer></Timer>}></Route>
            <Route path="/sub" element={<Slider></Slider>}></Route>
        </Routes>
    </div>
  );
}

export default App;
