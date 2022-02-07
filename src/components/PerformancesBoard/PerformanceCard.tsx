import { Performance } from "../../types";
import { ordinalFormat, formatDate, formatPerformance } from "../../utils";

interface IProps {
  performance: Performance;
}

const PerformanceCard = ({ performance }: IProps) => {
  const { value, event, location, position, date } = performance;
  return (
    <div className="performance-card card grow">
      <div className="event ">{event}</div>
      <div className="performance card-highlight">
        {formatPerformance(value, event)}
      </div>
      <div className="position small-text">{ordinalFormat(position)}</div>
      <div className="location">{location}</div>
      <div className="date small-text">{formatDate(date)}</div>
    </div>
  );
};

export default PerformanceCard;
