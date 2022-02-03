import { useEffect } from "react";
import Header from "./components/Heading/Heading";
import "./App.css";
import PerformancesBoard from "./components/PerformancesBoard/PerformancesBoard";
import RankingsBoard from "./components/RankingsBoard/RankingsBoard";
import { fetchInitialData } from "./actions/initialData";
import { useDispatch } from "react-redux";

const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchInitialData());
    }, []);
    return (
        <div className="app">
            <Header text="rs96.github.io" />
            <div className="info-boards">
                <PerformancesBoard />
                <RankingsBoard />
            </div>
        </div>
    );
};

export default App;
