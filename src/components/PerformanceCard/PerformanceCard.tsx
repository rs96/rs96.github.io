import { Performance } from "../../types";

interface IProps {
    performance: Performance;
}

const PerformanceCard = ({ performance }: IProps) => {
    const { value, event, location, position, date } = performance;
    return (
        <div className="performance-card">
            <div className="performance">{value}</div>
            <div className="event">{event}</div>
            <div className="location">{location}</div>
            <div className="position">{position}</div>
            <div className="date">{date}</div>
        </div>
    );
};

export default PerformanceCard;
