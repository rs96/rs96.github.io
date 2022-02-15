import EventPerformanceChart from './EventPerformanceChart';
import './chart.css';

const ChartBoard = () => {
  return (
    <div className="rankings-board board">
      <div className="board-heading">Charts</div>
      <div className="board-contents">
        <EventPerformanceChart />
      </div>
    </div>
  );
};

export default ChartBoard;
