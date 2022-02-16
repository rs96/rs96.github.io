import EventPerformanceChart from './EventPerformanceChart';
import './chart.css';

const ChartBoard = () => {
  return (
    <div className="rankings-board board">
      <div className="board-heading">Charts</div>
      <div className="small-text">Chart resizing currently broken on mobile :(</div>
      <div className="board-contents">
        <EventPerformanceChart event={{ id: '1', name: '400' }} />
        <EventPerformanceChart event={{ id: '4', name: '200' }} />
      </div>
    </div>
  );
};

export default ChartBoard;
