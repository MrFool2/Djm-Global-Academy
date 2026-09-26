export default function TrustItem({ icon, number, text }) {
  return (
    <div className="trust-item">

      <div className="trust-icon">
        {icon}
      </div>

      <div>
        <strong>{number}</strong>
        <span>{text}</span>
      </div>

    </div>
  );
}