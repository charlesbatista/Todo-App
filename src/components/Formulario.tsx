import { PlusCircle } from "@phosphor-icons/react";
import styles from "./Formulario.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import { PropsTarefas } from "./Tarefas";
import { v4 as uuid } from "uuid";

export function Formulario({tarefas, setTarefas} : PropsTarefas) {
  const [novaTarefa, setNovaTarefa] = useState("");

  function handleCriarNovaTarefa(event: FormEvent) {
    event.preventDefault();

    setTarefas([{ id: uuid(), descricao: novaTarefa, concluida: false }, ...tarefas]);
    setNovaTarefa("");
  }

  function handleNovaTarefaInput(event: ChangeEvent<HTMLInputElement>) {
    setNovaTarefa(event.target.value);
  }

  return (
    <form className={styles.formulario} onSubmit={handleCriarNovaTarefa}>
      <input
        type="text"
        name="tarefa"
        placeholder="Adicione uma nova tarefa"
        value={novaTarefa}
        onChange={handleNovaTarefaInput}
      />
      <button type="submit">
        Criar <PlusCircle size={20} />
      </button>
    </form>
  );
}
