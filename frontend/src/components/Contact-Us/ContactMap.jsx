
export default function ContactMap() {
    const style={
        
            width: '100%',
            height: '400px',
            border: 'none',
            'border-radius': '10px',
            'box-shadow': '0 10px 20px rgba(0, 0, 0, 0.1)'
        

    }
  return (
    <section className="contact-map">
        <h2>Find Us Here</h2>
        <iframe
          className="iframe-map"
          style={style}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14177.41190509983!2d79.127077!3d27.3334312!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39759a15dc8de54b%3A0x9c62b549b20fe72c!2sDJM%20Global%20Academy!5e0!3m2!1sen!2sin!4v1725182198126!5m2!1sen!2sin" 
          allowFullScreen=""
          loading="lazy"
          title="DJM Global Academy Location"
        ></iframe>
      </section>
  )
}