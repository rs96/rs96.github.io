import { useEffect } from "react";
import Header from "./components/Heading/Heading";
import "./App.css";
import ResultsBoard from "./components/ResultsBoard/ResultsBoard";
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
            <ResultsBoard />
        </div>
    );
};

export default App;
