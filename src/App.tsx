import { ChangeEvent, FormEvent, useState } from "react";
import { v4 as uuidV4 } from "uuid";

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { Task as TaskItem } from "./components/Task";
import { EmptyList } from "./components/EmptyList";

import styles from "./App.module.css";
import "./global.css";

interface Task {
  id: string;
  content: string;
  done: boolean;
}

export function App() {
  const [tasksList, setTasksList] = useState<Task[]>([
    { id: uuidV4(), content: "arrumar o quarto", done: true }
  ]);
  const [newTaskContent, setNewTaskContent] = useState<string>("");

  const tasksCount = tasksList.length;
  const completedTasksCount = tasksList.reduce((acc, task) => {
    if (task.done) {
      return acc + 1;
    }
    return acc;
  }, 0);
  const taskIsEmpty = tasksList.length === 0;

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasksList([
      ...tasksList,
      {
        id: uuidV4(),
        content: newTaskContent,
        done: false
      }
    ]);

    setNewTaskContent("");
  }

  function handleNewTaskContentChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskContent(event.target.value);
  }

  function handleChangeTaskStatus(taskId: string) {
    const newTaskListWithCompletedTask = tasksList.map((task) => {
      if (task.id === taskId) {
        task.done = !task.done;
      }

      return task;
    });

    setTasksList(newTaskListWithCompletedTask);
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
        <form onSubmit={handleCreateNewTask} className={styles.form}>
          <Input
            name="list"
            placeholder="Adicione uma nova tarefa"
            value={newTaskContent}
            onChange={handleNewTaskContentChange}
          />
          <Button />
        </form>

        <section>
          <header className={styles.taskHeader}>
            <div>
              <span>Tarefas criadas</span>
              <strong>{tasksCount}</strong>
            </div>

            <div>
              <span>Concluídas</span>
              <strong>
                {completedTasksCount} de {tasksCount}
              </strong>
            </div>
          </header>

          {taskIsEmpty ? (
            <EmptyList />
          ) : (
            tasksList.map((task) => {
              return (
                <TaskItem
                  key={task.id}
                  id={task.id}
                  content={task.content}
                  done={task.done}
                  onDeleteTask={handleDeleteTask}
                  onChangeTaskStatus={handleChangeTaskStatus}
                />
              );
            })
          )}
        </section>
      </main>
    </>
  );
}
