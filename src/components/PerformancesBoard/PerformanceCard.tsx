import { Performance } from '../../types';
import { ordinalFormat, formatDate } from '../../utils';
import * as venueSelectors from '../../selectors/venues';
import * as eventSelectors from '../../selectors/events';
import { useSelector } from 'react-redux';

interface IProps {
  performance: Performance;
}

const PerformanceCard = ({ performance }: IProps) => {
  const { position, eventId, venueId, date } = performance;
  const venue = useSelector(venueSelectors.getVenueNameById(venueId));
  const event = useSelector(eventSelectors.getEventNameById(eventId));
  return (
    <div className="performance-card card grow">
      <div className="event ">{event}</div>
      <div className="performance card-highlight">{`${performance.performance}${performance.tags.join()}`}</div>
      <div className="position small-text">{ordinalFormat(position)}</div>
      <div className="location small-text">{venue}</div>
      <div className="date small-text">{formatDate(date)}</div>
    </div>
  );
};

export default PerformanceCard;
