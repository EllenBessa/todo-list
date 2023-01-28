import Clipboard from "../assets/clipboard.svg";

import styles from "../styles/EmptyListFeedback.module.css";

export function EmptyListFeedback() {
  return (
    <section className={styles.emptyList}>
      <img src={Clipboard} alt="" />

      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </section>
  );
}
