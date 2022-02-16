import { useEffect } from 'react';
import Heading from '../Heading/Heading';
import './app.css';
import PerformancesBoard from '../PerformancesBoard/PerformancesBoard';
import LinkBoard from '../LinkBoard/LinkBoard';
import RankingsBoard from '../RankingsBoard/RankingsBoard';
import { fetchInitialData } from '../../actions/initialData';
import { useDispatch } from 'react-redux';
import ChartBoard from '../Charts/ChartBoard';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInitialData());
  }, [dispatch]);
  return (
    <div className="app">
      <Heading text="Athlete Overview" />
      <div className="info-boards">
        <RankingsBoard />
        <PerformancesBoard />
        <ChartBoard />
        <LinkBoard />
      </div>
    </div>
  );
};

export default App;
