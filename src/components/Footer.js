import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/sdlogo.png';
import navIcon1 from "../assets/img/foot-icon1.svg";
import navIcon2 from "../assets/img/foot-icon2.svg";
import navIcon3 from "../assets/img/foot-icon3.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
                <a href="https://x.com/SahanDulmith?t=HA35GenFRWeleOee3WwTiQ&s=08" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="Facebook" /></a>
                <a href="https://wa.me/qr/WZ7MYPSEBUY6C1" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Youtube" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
