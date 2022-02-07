import { useEffect } from "react";
import Header from "../Heading/Heading";
import "./App.css";
import PerformancesBoard from "../PerformancesBoard/PerformancesBoard";
import LinkBoard from "../LinkBoard/LinkBoard";
import RankingsBoard from "../RankingsBoard/RankingsBoard";
import { fetchInitialData } from "../../actions/initialData";
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
                <RankingsBoard />
                <PerformancesBoard />
                <LinkBoard />
            </div>
        </div>
    );
};

export default App;
