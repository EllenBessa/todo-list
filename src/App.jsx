import { useState } from "react";

import { Header } from "./components/Header";
import { TaskCard } from "./components/TaskCard";
import { CreateTaskForm } from "./components/CreateTaskForm";
import { EmptyListFeedback } from "./components/EmptyListFeedback";

import styles from "./styles/App.module.css";

export function App() {
  const [tasks, setTasks] = useState([]);

  const tasksIsEmpty = tasks.length === 0;

  return (
    <>
      <Header />

      <div className={styles.container}>
        <CreateTaskForm onCreateTask={setTasks} />

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

          {tasksIsEmpty ? (
            <EmptyListFeedback />
          ) : (
            <section className={styles.tasksList}>
              {tasks.map((task) => (
                <TaskCard key={task.id} text={task.title} />
              ))}
            </section>
          )}
        </main>
      </div>
    </>
  );
}
