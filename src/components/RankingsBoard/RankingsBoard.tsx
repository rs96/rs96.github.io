import { useSelector } from "react-redux";
import * as selectors from "../../selectors/athletics";
import RankingCard from "../RankingCard/RankingCard";

const RankingsBoard = () => {
    const rankings = useSelector(selectors.getRankings);
    return (
        <div className="rankings-board board">
            {rankings.map((ranking) => {
                // @ts-ignore
                return <RankingCard ranking={ranking} />;
            })}
        </div>
    );
};

export default RankingsBoard;
