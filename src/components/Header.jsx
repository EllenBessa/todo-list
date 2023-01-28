import styles from "../styles/Header.module.css";

import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={Logo} alt="Logo da aplicação" />
    </header>
  );
}
