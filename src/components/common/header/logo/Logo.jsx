import { Link } from "react-router-dom";
import React from "react";
import styles from "./logo.module.css";
import logo from "./logo.png";

export default function Logo() {
  return (
    <div>
      <Link to="/">
        <img className={styles.logo} src={logo} alt="Логотип" />
      </Link>
    </div>
  );
}
