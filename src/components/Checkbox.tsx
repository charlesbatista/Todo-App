import { Check } from "@phosphor-icons/react";
import styles from "./Checkbox.module.css";
import { TarefaTypes } from "./Tarefas";

interface CheckboxProps {
  tarefa: TarefaTypes,
  handleMarcarTarefaConcluida: (tarefa_id: string) => void;
}

export function Checkbox({ tarefa, handleMarcarTarefaConcluida }: CheckboxProps) {

  return (
    <label className={styles.custom_checkbox}>
      <input
        title="Marcar como concluído"
        type="checkbox"
        checked={tarefa.concluida}
        onChange={() => handleMarcarTarefaConcluida(tarefa.id)}
      />
      <div className={styles.icone}>
        {tarefa.concluida && <Check size={10} weight="bold" />}
      </div>
    </label>
  );
}
