import Timer from "./components/Timer";
import Slider from "./components/Slider";
import CountUp from "./components/CountUp"
import { Routes,Route, Link} from "react-router-dom"
function App() {
  return (
    <div className="App">
        <Link to="/">타이머</Link>
        <Link to="/sub">슬라이드</Link>
        {/*멀티카운트*/}
        <CountUp des={500} up={20}></CountUp>
        <CountUp des={1000} up={90}></CountUp>
        <CountUp des={2000} up={7}></CountUp>

        <Routes>
            <Route path="/" element={<Timer></Timer>}></Route>
            <Route path="/sub" element={<Slider></Slider>}></Route>
        </Routes>
    </div>
  );
}

export default App;
