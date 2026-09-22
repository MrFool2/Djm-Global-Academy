import React from 'react';
import './ContactUs.css';

export default function ContactUs() {
  return (
    <div className="contact-container">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>We are here to assist you with any inquiries or concerns. Please don't hesitate to reach out to us.</p>
      </section>

      <section className="contact-details">
        <div className="contact-info">
          <h2>Our Address</h2>
          <p>DJM Global Academy</p>
          <p>Aurandh, India</p>
          <p>Phone: +91-94-xx-xxx-xxx</p>
          <p>Email: DJMGlobal@gmail.com</p>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </section>

      <section className="contact-map">
        <h2>Find Us Here</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14177.41190509983!2d79.127077!3d27.3334312!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39759a15dc8de54b%3A0x9c62b549b20fe72c!2sDJM%20Global%20Academy!5e0!3m2!1sen!2sin!4v1725182198126!5m2!1sen!2sin" 
          allowFullScreen=""
          loading="lazy"
          title="DJM Global Academy Location"
        ></iframe>
      </section>
    </div>
  );
}
