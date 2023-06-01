import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidV4 } from "uuid";

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Task as TaskItem } from "./components/Task";

import styles from "./App.module.css";
import "./global.css";

interface Task {
  id: string;
  content: string;
  done: boolean;
}

export function App() {
  const [tasksList, setTasksList] = useState<Task[]>([]);

  const [newListText, setNewListText] = useState("");

  const taskCount = tasksList.length;

  function handleCreateNewList(event: FormEvent) {
    event.preventDefault();

    setTasksList([
      ...tasksList,
      {
        id: uuidV4(),
        content: newListText,
        done: false
      }
    ]);
    setNewListText("");
  }

  function handleNewListChange(event: ChangeEvent<HTMLInputElement>) {
    setNewListText(event.target.value);
  }

  function handleDeleteTask(taskId: string) {
    const listWithoutDeletedOne = tasksList.filter((task) => {
      return task.id !== taskId;
    });

    setTasksList(listWithoutDeletedOne);
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
              <strong>{taskCount}</strong>
            </div>

            <div>
              <span>Concluídas</span>
              <strong>0 de {taskCount}</strong>
            </div>
          </header>

          {tasksList.map((task) => {
            return (
              <TaskItem
                key={task.id}
                id={task.id}
                content={task.content}
                done={task.done}
                onDeleteTask={handleDeleteTask}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}
