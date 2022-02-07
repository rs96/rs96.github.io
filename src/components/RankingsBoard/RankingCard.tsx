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
            <div className="ranking">UK: {ordinalFormat(rank.uk)}</div>
            {rank.european && (
                <div className="ranking">
                    Europe: {ordinalFormat(rank.european)}
                </div>
            )}
            {rank.world && (
                <div className="ranking">
                    World: {ordinalFormat(rank.world)}
                </div>
            )}
        </div>
    );
};

export default RankingCard;
