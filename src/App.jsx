import { Trash } from "phosphor-react";

import { Header } from "./components/Header";

import styles from "./styles/App.module.css";

import Clipboard from "./assets/clipboard.svg";
import { CreateTaskForm } from "./components/CreateTaskForm";

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

          {/* <section className={styles.emptyList}>
            <img src={Clipboard} alt="" />

            <strong>Você ainda não tem tarefas cadastradas</strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </section> */}

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
