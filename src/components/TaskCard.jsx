import { Trash } from "phosphor-react";

import styles from "../styles/TaskCard.module.css";

export function TaskCard({ text }) {
  return (
    <div className={styles.taskCard}>
      <input type="checkbox" />

      <span>{text}</span>

      <button>
        <Trash size={18} color="#808080" />
      </button>
    </div>
  );
}
