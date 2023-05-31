import { Trash } from "@phosphor-icons/react";

import styles from "./Task.module.css";

interface ListProps {
  content: string;
  onDeleteList: (list: string) => void;
}

export function Task({ content, onDeleteList }: ListProps) {
  function handleDeleteList() {
    onDeleteList(content);
  }

  return (
    <div className={styles.task}>
      <input type="checkbox" />

      <span>{content}</span>

      <button type="submit" onClick={handleDeleteList}>
        <Trash size={20} />
      </button>
    </div>
  );
}
