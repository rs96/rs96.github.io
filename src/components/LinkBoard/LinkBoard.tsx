import LinkCard from './LinkCard';

const LinkBoard = () => {
  return (
    <div className="link-board board">
      <div className="board-heading">External Links</div>
      <div className="board-contents">
        <LinkCard name="Power of 10" link="https://thepowerof10.info/athletes/profile.aspx?athleteid=78994" />
        <LinkCard
          name="European Athletics"
          link="https://www.european-athletics.com/historical-data/athletes/great-britain-ni/robert-shipley-014595063"
        />
        <LinkCard
          name="World Athletics"
          link="https://worldathletics.org/athletes/great-britain-ni/robert-shipley-14595063"
        />
      </div>
    </div>
  );
};

export default LinkBoard;
