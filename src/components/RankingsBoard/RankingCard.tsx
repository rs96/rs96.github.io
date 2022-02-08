import { Ranking } from '../../types';
import { ordinalFormat } from '../../utils';

interface IProps {
  ranking: Ranking;
}

const RankingCard = ({ ranking }: IProps) => {
  const { event, rank } = ranking;
  return (
    <div className="ranking-card card">
      <div className="event">{event}</div>
      <div className="ranking-line">
        <div className="ranking small-text">UK:</div>
        <div className="ranking">{ordinalFormat(rank.uk)}</div>
      </div>
      {rank.european && (
        <div className="ranking-line">
          <div className="ranking small-text">Europe:</div>
          <div className="ranking">{ordinalFormat(rank.european)}</div>
        </div>
      )}
      {rank.world && (
        <div className="ranking-line">
          <div className="ranking small-text">World:</div>
          <div className="ranking">{ordinalFormat(rank.world)}</div>
        </div>
      )}
    </div>
  );
};

export default RankingCard;
