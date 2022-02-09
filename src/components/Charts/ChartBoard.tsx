import PerformanceScoreChart from './PerformanceScoreChart';
import './chart.css';

const ChartBoard = () => {
  return (
    <div className="rankings-board board">
      <div className="board-heading">Charts</div>
      <div className="board-contents">
        <PerformanceScoreChart />
      </div>
    </div>
  );
};

export default ChartBoard;
