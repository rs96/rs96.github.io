import { Ranking } from "../../types";

interface IProps {
    ranking: Ranking;
}

const RankingCard = ({ ranking }: IProps) => {
    const { event, rank } = ranking;
    return (
        <div className="performance-card">
            <div className="performance">{event}</div>
            <div className="event">{rank}</div>
        </div>
    );
};

export default RankingCard;
