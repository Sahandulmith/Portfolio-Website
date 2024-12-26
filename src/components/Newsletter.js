import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";
import emailjs from "@emailjs/browser";

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.indexOf("@") > -1) {
      setStatus("sending");
      emailjs
        .send(
          "service_83d4ukv", // Replace with your EmailJS service ID
          "template_sescau3", // Replace with your EmailJS template ID for auto-reply
          { user_email: email }, // Pass the email entered by the user
          "gT3eFYqMWyhkMna_4" // Replace with your EmailJS public key
        )
        .then(
          () => {
            setStatus("success");
            setMessage("Thank you for subscribing to our newsletter!");
          },
          (error) => {
            setStatus("error");
            setMessage("Something went wrong. Please try again later.");
            console.error("Error subscribing:", error);
          }
        );
    } else {
      setStatus("error");
      setMessage("Please enter a valid email address.");
    }
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>
              Subscribe to our Newsletter<br /> & Never miss the latest updates
            </h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
              </div>
              <div className="new-email-bx1">
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

