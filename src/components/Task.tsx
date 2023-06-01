import { Trash } from "@phosphor-icons/react";

import styles from "./Task.module.css";

interface TaskProps {
  id: string;
  content: string;
  done: boolean;
  onDeleteTask: (taskId: string) => void;
  onChangeTaskStatus: (taskId: string) => void;
}

export function Task({
  id,
  content,
  done,
  onDeleteTask,
  onChangeTaskStatus
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(id);
  }

  function handleChangeTaskStatus() {
    onChangeTaskStatus(id);
  }

  return (
    <div className={styles.task}>
      <input type="checkbox" onClick={handleChangeTaskStatus} checked={done} />

      <div className={styles.taskContent}>
        <span>{content}</span>
      </div>

      <button type="submit" onClick={handleDeleteTask}>
        <Trash size={20} />
      </button>
    </div>
  );
}
