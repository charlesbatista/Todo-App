import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Tarefas } from "./components/Tarefas";

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Tarefas />
      </div>
    </>
  );
}

export default App;
