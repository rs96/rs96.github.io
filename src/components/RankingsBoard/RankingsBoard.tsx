import { useSelector } from "react-redux";
import * as selectors from "../../selectors/athletics";
import RankingCard from "../RankingCard/RankingCard";

const RankingsBoard = () => {
    const rankings = useSelector(selectors.getRankings);
    return (
        <div className="rankings-board">
            <div className="heading">Season Rankings</div>
            <div className="board">
                {rankings.map((ranking, index) => (
                    <div key={index}>
                        <RankingCard ranking={ranking} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RankingsBoard;
