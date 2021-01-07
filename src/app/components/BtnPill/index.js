import './index.css';

function Pill({ children, color }) {
  const assignedColor = ['green', 'yellow', 'red'].includes(color)
    ? color
    : 'grey';

  return (
    <p>
      <span className={assignedColor}>{children}</span>
    </p>
  );
}

export default Pill;
