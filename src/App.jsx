import { PlusCircle } from "phosphor-react";

import styles from "./styles/App.module.css";

import Logo from "./assets/logo.svg";
import Clipboard from "./assets/clipboard.svg";

export function App() {
  return (
    <>
      <header className={styles.header}>
        <img src={Logo} alt="Logo da aplicação" />
      </header>

      <div className={styles.container}>
        <form className={styles.form}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>
            Criar
            <PlusCircle size={18} weight="bold" />
          </button>
        </form>

        <main>
          <header className={styles.tasksHeader}>
            <div>
              <strong>Tarefas criadas</strong>
              <span>0</span>
            </div>

            <div>
              <strong>Concluidas</strong>
              <span>0</span>
            </div>
          </header>

          <section className={styles.emptyList}>
            <img src={Clipboard} alt="" />

            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </section>
        </main>
      </div>
    </>
  );
}
