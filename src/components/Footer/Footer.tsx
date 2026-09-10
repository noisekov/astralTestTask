import React from "react";
import "./Footer.css";

interface FooterProps {
  contacts: string[];
}

const Footer: React.FC<FooterProps> = ({ contacts }) => {
  return (
    <footer className="footer">
      <p className="footer__title">Контакты</p>
      <ul className="footer__list">
        {contacts.map((contact) => (
          <li key={contact}>{contact}</li>
        ))}
      </ul>
      <p className="footer__copy">© 2026 noisekov</p>
    </footer>
  );
};
export default Footer;
