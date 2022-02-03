import { useSelector } from "react-redux";
import * as selectors from "../../selectors/athletics";
import PerformanceCard from "../PerformanceCard/PerformanceCard";

const PerformancesBoard = () => {
    const performances = useSelector(selectors.getPerformances);
    return (
        <div className="results-board">
            <div className="heading">Recent Performances</div>
            <div className="board">
                {performances.map((performance, index) => (
                    <div key={index}>
                        <PerformanceCard performance={performance} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PerformancesBoard;
