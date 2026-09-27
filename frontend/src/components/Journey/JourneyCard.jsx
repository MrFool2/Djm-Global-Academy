export default function JourneyCard({ number, icon, title, text }) {
  return (
    <div className="journey-item">

      <span className="journey-number">
        {number}
      </span>

      <div className="journey-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

    </div>
  );
}
