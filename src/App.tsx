import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Task } from "./components/Task";

import styles from "./App.module.css";

import "./global.css";
import { ChangeEvent, FormEvent, useState } from "react";

export function App() {
  const [todoList, setTodoList] = useState(["Arrumar o quarto"]);

  const [newListText, setNewListText] = useState("");

  function handleCreateNewList(event: FormEvent) {
    event.preventDefault();

    setTodoList([...todoList, newListText]);
    setNewListText("");
  }

  function handleNewListChange(event: ChangeEvent<HTMLInputElement>) {
    setNewListText(event.target.value);
  }

  return (
    <>
      <Header />

      <main className={styles.wrapper}>
        <form onSubmit={handleCreateNewList} className={styles.form}>
          <Input
            name="list"
            placeholder="Adicione uma nova tarefa"
            value={newListText}
            onChange={handleNewListChange}
          />
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

          {todoList.map((todoList) => {
            return <Task key={todoList} content={todoList} />;
          })}
        </section>
      </main>
    </>
  );
}
