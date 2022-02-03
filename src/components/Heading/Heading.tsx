interface IProps {
    text: string;
}

const Heading = ({ text }: IProps) => <div className="heading">{text}</div>;

export default Heading;
