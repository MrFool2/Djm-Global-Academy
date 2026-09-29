export default function UpdateCard({ type, date, title }) {
  return (
    <div className="update-item">

      <span className={`update-tag ${type.toLowerCase()}`}>
        {type}
      </span>

      <span className="update-date">
        {date}
      </span>

      <strong>
        {title}
      </strong>

    </div>
  );
}