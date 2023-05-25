import { Header } from "./components/Header";
import { Input } from "./components/Input";

import "./global.css";
import styles from "./App.module.css";

export function App() {
  return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <form className={styles.form}>
          <Input placeholder="Adicione uma nova tarefa" />
        </form>
      </main>
    </>
  );
}
