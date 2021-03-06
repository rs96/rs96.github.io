import { useSelector } from 'react-redux';
import * as selectors from '../../selectors/performances';
import PerformanceCard from './PerformanceCard';
import './Performance.css';

const PerformancesBoard = () => {
  const performances = useSelector(selectors.getPerformances);
  return (
    <div className="results-board board">
      <div className="board-heading">Recent Performances</div>
      <div className="board-contents">
        {performances.slice(0, 9).map((performance, index) => (
          <div key={index}>
            <PerformanceCard performance={performance} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformancesBoard;
