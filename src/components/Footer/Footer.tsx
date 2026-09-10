import React from "react";
import styles from "./Footer.module.css";

interface FooterProps {
  contacts: string[];
}

const Footer: React.FC<FooterProps> = ({ contacts }) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__title}>Контакты</p>
      <ul className={styles.footer__list}>
        {contacts.map((contact) => (
          <li key={contact}>{contact}</li>
        ))}
      </ul>
      <p className={styles.footer__copy}>© 2026 noisekov</p>
    </footer>
  );
};
export default Footer;
