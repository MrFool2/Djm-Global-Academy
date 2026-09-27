export default function Facility({ icon, title, text }) {
  return (
    <div className="facility-card">

      <div className="facility-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{text}</p>

    </div>
  );
}