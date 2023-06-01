import { Trash } from "@phosphor-icons/react";

import styles from "./Task.module.css";

interface TaskProps {
  id: string;
  content: string;
  done: boolean;
  onDeleteTask: (taskId: string) => void;
}

export function Task({ id, content, done, onDeleteTask }: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  return (
    <div className={styles.task}>
      <input type="checkbox" />

      <div className={styles.taskContent}>
        <span>{content}</span>
      </div>

      <button type="submit" onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
}
