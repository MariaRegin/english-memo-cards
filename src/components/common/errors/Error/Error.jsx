import React from "react";
import styles from "./error.module.css";

export default function Error() {
  return (
    <>
      <p className={styles.error}>
        Произошла ошибка, попробуйте перезагрузить страницу
      </p>
    </>
  );
}
