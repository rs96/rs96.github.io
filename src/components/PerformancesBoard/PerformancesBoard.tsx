import { useSelector } from "react-redux";
import * as selectors from "../../selectors/athletics";
import PerformanceCard from "../PerformanceCard/PerformanceCard";

const ResultsBoard = () => {
    const performances = useSelector(selectors.getPerformances);
    return (
        <div className="results-board board">
            {performances.map((performance) => {
                // @ts-ignore
                return <PerformanceCard performance={performance} />;
            })}
        </div>
    );
};

export default ResultsBoard;
