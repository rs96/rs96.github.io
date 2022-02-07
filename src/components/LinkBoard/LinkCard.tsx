interface IProps {
  name: string;
  link: string;
}

const LinkCard = ({ name, link }: IProps) => {
  return (
    <a href={link}>
      <div className="link-card card grow">
        <div className="name">{name}</div>
      </div>
    </a>
  );
};

export default LinkCard;
