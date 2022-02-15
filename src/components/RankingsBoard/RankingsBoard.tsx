import { useSelector } from 'react-redux';
import * as selectors from '../../selectors/rankings';
import RankingCard from './RankingCard';
import './Ranking.css';

const RankingsBoard = () => {
  const rankings = useSelector(selectors.getRankings);
  return (
    <div className="rankings-board board">
      <div className="board-heading">Season Rankings</div>
      <div className="board-contents">
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
