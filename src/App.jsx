import { Trash } from "phosphor-react";

import { Header } from "./components/Header";
import { CreateTaskForm } from "./components/CreateTaskForm";
import { EmptyListFeedback } from "./components/EmptyListFeedback";

import styles from "./styles/App.module.css";

export function App() {
  return (
    <>
      <Header />

      <div className={styles.container}>
        <CreateTaskForm />

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
            <div className={styles.taskCard}>
              <input type="checkbox" />

              <span>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer. semper. Duis vel sed fames
                integer.
              </span>

              <button>
                <Trash size={18} color="#808080" />
              </button>
            </div>

            <div className={styles.taskCard}>
              <input type="checkbox" />

              <span>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer. semper. Duis vel sed fames
                integer.
              </span>

              <button>
                <Trash size={18} color="#808080" />
              </button>
            </div>

            <div className={styles.taskCard}>
              <input type="checkbox" />

              <span>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer. semper. Duis vel sed fames
                integer.
              </span>

              <button>
                <Trash size={18} color="#808080" />
              </button>
            </div>

            <div className={styles.taskCard}>
              <input type="checkbox" />

              <span>
                Integer urna interdum massa libero auctor neque turpis turpis
                semper. Duis vel sed fames integer. semper. Duis vel sed fames
                integer.
              </span>

              <button>
                <Trash size={18} color="#808080" />
              </button>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
