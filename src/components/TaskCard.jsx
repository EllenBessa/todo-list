import { Trash } from "phosphor-react";

import styles from "../styles/TaskCard.module.css";

export function TaskCard() {
  return (
    <div className={styles.taskCard}>
      <input type="checkbox" />

      <span>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer. semper. Duis vel sed fames integer.
      </span>

      <button>
        <Trash size={18} color="#808080" />
      </button>
    </div>
  );
}
