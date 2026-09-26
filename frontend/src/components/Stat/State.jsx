
export default function Stat({ icon, number, label, extra }) {
  return (
    <div className="hero-stat">

      <div className="stat-icon">
        {icon}
      </div>

      <div>
        <strong>{number}</strong>

        <span>{label}</span>

        {extra && (
          <small>{extra}</small>
        )}
      </div>

    </div>
  );
}