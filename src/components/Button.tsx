import { PlusCircle } from "@phosphor-icons/react";

import styles from "./Button.module.css";

export function Button() {
  return (
    <button type="submit" className={styles.button}>
      Criar <PlusCircle weight="bold" size={16} />
    </button>
  );
}
