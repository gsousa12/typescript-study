import { useState } from "react";

const UseStateExample = () => {
  const [taskList, setTaskList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  function addTask() {
    if (inputValue.trim()) {
      setTaskList([...taskList, inputValue]);
      setInputValue("");
    }
  }

  function removeTask(index: number) {
    setTaskList(taskList.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h1>useState</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={addTask}>Adicionar Tarefa</button>

      <br></br>

      <ul>
        {taskList.map((task, index) => (
          <div>
            <li key={index}>
              {task}
              <button
                onClick={() => {
                  removeTask(index);
                }}
              >
                Remover
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UseStateExample;
