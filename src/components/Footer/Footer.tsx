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
            <svg
              className={styles.footer__img}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.9V8.1l6.5 3.9-6.5 3.9Z" />
            </svg>
            <span>YouTube</span>
          </a>
        </li>

        <li>
          <a className={styles.footer__link} href={twitter} target="_blank">
            <svg
              className={styles.footer__img}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3l-4.9-6.4L6.4 22H3.3l7.3-8.3L2.8 2h6.5l4.4 5.8L18.9 2Zm-1.1 17.9h1.7L8.3 4H6.5l11.3 15.9Z" />
            </svg>
            <span>Twitter</span>
          </a>
        </li>

        <li>
          <a className={styles.footer__link} href={instagram} target="_blank">
            <svg
              className={styles.footer__img}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6Zm8.9 1.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
            </svg>
            <span>Instagram</span>
          </a>
        </li>
      </ul>
      <p className={styles.footer__copy}>© 2026 noisekov</p>
    </footer>
  );
};

export default Footer;
