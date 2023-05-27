import { Trash } from "@phosphor-icons/react";

import styles from "./Task.module.css";

export function Task() {
  return (
    <div className={styles.task}>
      <input type="checkbox" />

      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid
        quidem laboriosam tempore Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Ducimus est voluptates iure voluptatem eum dolorem
        laudantium soluta temporibus eos, quia velit praesentium incidunt!
        Temporibus blanditiis ß{" "}
      </span>

      <button>
        <Trash size={20} />
      </button>
    </div>
  );
}
