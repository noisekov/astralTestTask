import React from "react";
import styles from "./Footer.module.css";

interface FooterProps {
  youtube: string;
  twitter: string;
  instagram: string;
}

const Footer: React.FC<FooterProps> = ({
  youtube,
  twitter,
  instagram,
}: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <p className={styles.footer__title}>Контакты</p>
      <ul className={styles.footer__list}>
        <li>
          <a className={styles.footer__link} href={youtube} target="_blank">
            <img
              className={styles.footer__img}
              src={`${import.meta.env.BASE_URL}icons/youtube.svg`}
              alt="YouTube"
            />
            <span>YouTube</span>
          </a>
        </li>

        <li>
          <a className={styles.footer__link} href={twitter} target="_blank">
            <img
              className={styles.footer__img}
              src={`${import.meta.env.BASE_URL}icons/twitter.svg`}
              alt="Twitter"
            />
            <span>Twitter</span>
          </a>
        </li>

        <li>
          <a className={styles.footer__link} href={instagram} target="_blank">
            <img
              className={styles.footer__img}
              src={`${import.meta.env.BASE_URL}icons/instagram.svg`}
              alt="Instagram"
            />
            <span>Instagram</span>
          </a>
        </li>
      </ul>
      <p className={styles.footer__copy}>© 2026 noisekov</p>
    </footer>
  );
};

export default Footer;
