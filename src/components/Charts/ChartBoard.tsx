import EventPerformanceChart from './EventPerformanceChart';
import './chart.css';

const ChartBoard = () => {
  return (
    <div className="rankings-board board">
      <div className="board-heading">Charts</div>
      <div className="small-text">
        Zoom in a tiny bit on the page if the charts are all borked - D3 is really annoying
      </div>
      <div className="board-contents">
        <EventPerformanceChart event={{ id: '1', name: '400' }} />
        <EventPerformanceChart event={{ id: '4', name: '200' }} />
      </div>
    </div>
  );
};

export default ChartBoard;
