

export default function ContactUs() {
  return (
    <section id="contact" className="contact-section">

        <div className="contact-container">

          <div className="contact-info">

            <span className="eyebrow">
              CONTACT US
            </span>

            <h2>
              Let's Build a
              <br />
              <span>Bright Future Together.</span>
            </h2>

            <div className="contact-item">
              <span>📍</span>
              <p>
                Aurandh, Mainpuri,
                <br />
                Uttar Pradesh – 205267
              </p>
            </div>

            <div className="contact-item">
              <span>📞</span>
              <p>
                +91 XXXXX XXXXX
              </p>
            </div>

            <div className="contact-item">
              <span>✉</span>
              <p>
                info@djmglobalacademy.in
              </p>
            </div>

          </div>


          <div className="contact-form">

            <h3>
              Enquire About Admission
            </h3>

            <p>
              Fill in your details and our team will
              get in touch with you.
            </p>

            <form>

              <input
                type="text"
                placeholder="Parent / Student Name"
              />

              <input
                type="tel"
                placeholder="Mobile Number"
              />

              <select defaultValue="">
                <option value="" disabled>
                  Select Class
                </option>

                <option>Class 1</option>
                <option>Class 2</option>
                <option>Class 3</option>
                <option>Class 4</option>
                <option>Class 5</option>
                <option>Class 6</option>
                <option>Class 7</option>
                <option>Class 8</option>
                <option>Class 9</option>
                <option>Class 10</option>
              </select>

              <textarea
                placeholder="Your message"
                rows="4"
              ></textarea>

              <button type="submit">
                Send Enquiry →
              </button>

            </form>

          </div>

        </div>

      </section>
  );
}
