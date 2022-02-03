import { useSelector } from "react-redux";
import * as rankingsSelectors from "../../selectors/rankings";
import PerformanceCard from "../PerformanceCard/PerformanceCard";

const ResultsBoard = () => {
    const performances = useSelector(rankingsSelectors.getPerformances);
    return (
        <div className="results-board">
            {performances.map((performance) => {
                // @ts-ignore
                return <PerformanceCard performance={performance} />;
            })}
        </div>
    );
};

export default ResultsBoard;
