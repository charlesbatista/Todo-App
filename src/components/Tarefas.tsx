import { ClipboardText, Trash } from "@phosphor-icons/react";
import styles from "./Tarefas.module.css";
import { Checkbox } from "./Checkbox";
import { useState } from "react";
import { Formulario } from "./Formulario";

export interface TarefaTypes {
  id: string;
  descricao: string;
  concluida: boolean;
}

export interface PropsTarefas {
  tarefas: TarefaTypes[];
  setTarefas: React.Dispatch<React.SetStateAction<TarefaTypes[]>>;
}

export function Tarefas() {
  const tarefasExemplo: TarefaTypes[] = [
    {
      id: "b9d1479b-32fe-4f29-a5ae-083f10d92b34",
      descricao: "Estudar para a prova de física.",
      concluida: false,
    },
    {
      id: "a0c861f6-1dd2-4248-b372-c9b71b7b04b9",
      descricao: "Fazer as compras no mercado.",
      concluida: false,
    },
    {
      id: "09f73e94-6ec8-4e79-a9a9-1d918a8f8cfe",
      descricao: "Ligar para o médico e agendar a consulta.",
      concluida: true,
    },
    {
      id: "c98fb16f-12e5-41f5-af5a-aa9239255b19",
      descricao: "Limpar o carro.",
      concluida: false,
    },
    {
      id: "ef38f54b-b79d-4683-ba80-6b145f1b4c2d",
      descricao: "Preparar a apresentação para o trabalho.",
      concluida: true,
    },
  ];

  const [tarefas, setTarefas] = useState<TarefaTypes[]>(tarefasExemplo);

  function handleMarcarTarefaConcluida(tarefa_id: string) {
    setTarefas(
      tarefas.map(function (tarefa: TarefaTypes) {
        if (tarefa.id === tarefa_id) {
          tarefa.concluida = !tarefa.concluida;
        }
        return tarefa;
      })
    );
  }

  function handleDeletarTarefa(tarefa_id: string) {
    setTarefas(
      tarefas.filter((tarefa) => {
        return tarefa.id !== tarefa_id;
      })
    );
  }

  const tarefasCriadas = tarefas.length;
  const tarefasConcluidas = tarefas.filter(function (tarefa) {
    return tarefa.concluida;
  }).length;

  return (
    <div className={styles.tarefas}>
      <Formulario tarefas={tarefas} setTarefas={setTarefas} />

      <header>
        <button type="button" className={styles.criadas}>
          Tarefas criadas <span>{tarefasCriadas}</span>
        </button>
        <button type="button" className={styles.concluidas}>
          Concluídas{" "}
          <span>
            {tarefasConcluidas} de {tarefasCriadas}
          </span>
        </button>
      </header>

      <div className={styles.corpo}>
        {tarefasCriadas === 0 ? (
          <div className={styles.sem_tarefas}>
            <p className="texto-gray-400">
              <ClipboardText size={64} />
            </p>
            <p>
              <b>Você ainda não tem tarefas cadastradas</b>
            </p>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        ) : (
          <ul>
            {tarefas.map((tarefa) => (
              <li
                key={tarefa.id}
                className={tarefa.concluida ? styles.concluida : ""}
              >
                <Checkbox
                  tarefa={tarefa}
                  handleMarcarTarefaConcluida={handleMarcarTarefaConcluida}
                />
                <span className={styles.descricao}>{tarefa.descricao}</span>
                <span
                  className={styles.excluir}
                  onClick={() => handleDeletarTarefa(tarefa.id)}
                >
                  <Trash size={16} />
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
