import { Ranking } from "../../types";
import { ordinalFormat } from "../../utils";

interface IProps {
    ranking: Ranking;
}

const RankingCard = ({ ranking }: IProps) => {
    const { event, rank } = ranking;
    return (
        <div className="performance-card card">
            <div className="event">{event}</div>
            <div className="ranking">{ordinalFormat(rank)}</div>
        </div>
    );
};

export default RankingCard;
