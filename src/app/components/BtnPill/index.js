import './index.css';

function Pill({ pillInfo }) {
  return (
    <>
      {pillInfo.map((singlePill, index) => {
        const assignedColor = ['green', 'yellow', 'red'].includes(
          singlePill.color
        )
          ? singlePill.color
          : 'grey';

        return (
          <p className="skills__pills" key={index}>
            <span className={assignedColor}>{singlePill.text}</span>
          </p>
        );
      })}
    </>
  );
}

export default Pill;
