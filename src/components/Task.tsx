import { Trash } from "@phosphor-icons/react";

import styles from "./Task.module.css";

interface ListProps {
  content: string;
}

export function Task({ content }: ListProps) {
  return (
    <div className={styles.task}>
      <input type="checkbox" />

      <span>{content}</span>

      <button type="submit">
        <Trash size={20} />
      </button>
    </div>
  );
}
