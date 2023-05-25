import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <form className={styles.form}>
          <Input placeholder="Adicione uma nova tarefa" />
          <Button />
        </form>

        <section>
          <header className={styles.taskHeader}>
            <div>
              <span>Tarefas criadas</span>
              <strong>0</strong>
            </div>

            <div>
              <span>Concluídas</span>
              <strong>0</strong>
            </div>
          </header>
        </section>
      </main>
    </>
  );
}
