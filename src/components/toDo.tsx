import React, { useState } from "react";
import styled from "styled-components";

type Props = {};

function toDo({}: Props) {
  const [ToDos, setToDos] = useState<{ text: string; isCompleted: boolean }[]>([
    { text: "aaaaaa", isCompleted: false },
  ]);
  const [currentToDo, setCurrentToDo] = useState<string>("");

  const handleToDoInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentToDo(event.target.value);
  };

  const handleAddToDo = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (currentToDo) {
      setToDos([...ToDos, { text: currentToDo, isCompleted: false }]);
      setCurrentToDo("");
    }
  };

  const handleDeleteCompleted = () => {
    const newToDos = ToDos.filter((todo) => !todo.isCompleted);
    setToDos(newToDos);
  };

  const handleToggleCompleted = (id: number) => {
    const newToDos = [...ToDos];
    newToDos[id].isCompleted = !newToDos[id].isCompleted;
    setToDos(newToDos);
  };

  return (
    <Wrapper>
      <h1>TODO List</h1>
      <form action="submit" onSubmit={handleAddToDo}>
        <input
          type="text"
          value={currentToDo}
          onChange={handleToDoInputChange}
        />
        <button className="btn" type="submit">
          Add ToDo
        </button>
      </form>
      <ul>
        {ToDos.map((todo, id) => (
          <li
            key={id}
            className={`todo__task ${
              todo.isCompleted ? "completed" : "inprogress"
            }`}
          >
            <div
              className="todo__task--text"
              onClick={() => handleToggleCompleted(id)}
            >
              {todo.text}
            </div>

            <div className="todo__task--status">
              <p>Status:</p>
              <p>{todo.isCompleted ? "COMPLETE" : "IN PROGRESS"}</p>
            </div>
          </li>
        ))}
      </ul>
      <button className="btn" onClick={handleDeleteCompleted}>
        Remove All
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 75%;
  margin: 10vh auto;
  background: lightgreen;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 6rem;
  gap: 3rem;

  h1 {
    font-size: 2.5rem;
    font-weight: bold;
    color: darkgreen;
  }

  ul {
    width: 100%;
    list-style: none;
  }

  .todo__task {
    display: flex;
    align-items: center;
    width: 100%;
    height: 70px;
    background: white;
    border-radius: 20px;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    font-weight: bold;
    color: grey;
    margin-bottom: 1rem;
    border: 2px solid orange;

    &--text {
      flex: 2;
    }

    &--status {
      flex: 1;
      padding-left: 1rem;
      border-left: 2px solid orange;
      color: orange;
    }

    &.completed {
      border: 2px solid green;

      .todo__task--status {
        border-left: 2px solid green;
        color: green;
      }
    }
  }

  form {
    display: flex;
    gap: 2rem;
    height: 50px;
    width: 100%;
    input {
      width: 70%;
      height: 100%;
      border-radius: 20px;
      border: 2px solid darkgreen;
    }
  }
  .btn {
    width: 200px;
    height: 50px;
    border-radius: 20px;
    border: 2px solid blue;
    background: lightblue;
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export default toDo;
