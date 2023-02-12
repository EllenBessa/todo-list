import { useState } from "react";

import { Header } from "./components/Header";
import { TaskCard } from "./components/TaskCard";
import { CreateTaskForm } from "./components/CreateTaskForm";
import { EmptyListFeedback } from "./components/EmptyListFeedback";

import styles from "./styles/App.module.css";

export function App() {
  const [tasks, setTasks] = useState([]);

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

          {/* <EmptyListFeedback /> */}

          <section className={styles.tasksList}>
            <TaskCard text="Oi" />
            <TaskCard text="Remi" />
          </section>
        </main>
      </div>
    </>
  );
}
