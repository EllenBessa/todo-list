import { useState } from "react";
import { PlusCircle } from "phosphor-react";
import { v4 as uuidV4 } from "uuid";

import styles from "../styles/CreateTaskForm.module.css";

export function CreateTaskForm({ onCreateTask }) {
  const [newTask, setNewTask] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    onCreateTask((state) => {
      return [
        ...state,
        {
          id: uuidV4(),
          title: newTask,
          isCompleted: false,
        },
      ];
    });

    setNewTask("");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        required
      />

      <button>
        Criar
        <PlusCircle size={18} weight="bold" />
      </button>
    </form>
  );
}
