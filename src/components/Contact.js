import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const form = useRef();

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const validateForm = () => {
    const { firstName, lastName, email, phone, message } = formDetails;
    let valid = true;
    let errorMessage = "";

    // Check for empty fields
    if (!firstName || !lastName || !email || !phone || !message) {
      valid = false;
      errorMessage = "Please fill in all fields.";
    }
    
    // Validate email format
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (valid && !emailPattern.test(email)) {
      valid = false;
      errorMessage = "Please enter a valid email address.";
    }

    // Validate phone number (optional: you can customize this regex based on your phone number format)
    const phonePattern = /^[0-9]{10}$/;  // Example: 10 digit phone number validation
    if (valid && !phonePattern.test(phone)) {
      valid = false;
      errorMessage = "Please enter a valid phone number (10 digits).";
    }

    return { valid, errorMessage };
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const { valid, errorMessage } = validateForm();

    if (!valid) {
      setButtonText("Send");
      setStatus({ success: false, message: errorMessage });
      return;
    }

    emailjs
      .sendForm(
        "service_83d4ukv", // Replace with your EmailJS service ID
        "template_sescau3", // Replace with your EmailJS template ID
        form.current,
        "gT3eFYqMWyhkMna_4" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          setButtonText("Send");
          setStatus({ success: true, message: "Message sent successfully!" });
          setFormDetails(formInitialDetails);
        },
        (error) => {
          console.error("Error sending message:", error.text);
          setButtonText("Send");
          setStatus({ success: false, message: "Something went wrong, please try again later." });
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="user_name"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate("firstName", e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="user_lastname"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate("lastName", e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="user_email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate("email", e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="user_phone"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate("phone", e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate("message", e.target.value)}
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
