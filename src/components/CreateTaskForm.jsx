import { PlusCircle } from "phosphor-react";

import styles from "../styles/CreateTaskForm.module.css";

export function CreateTaskForm() {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button>
        Criar
        <PlusCircle size={18} weight="bold" />
      </button>
    </form>
  );
}
