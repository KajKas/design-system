import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";
import { Button } from "./stories/Button";

const App: Component = () => {
  return (
    <div>
      <Button size="small" variant="secondary" label="dupa" />
    </div>
  );
};

export default App;
