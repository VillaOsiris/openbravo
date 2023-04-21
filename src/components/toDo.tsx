import React, { useState } from "react";
import styled from "styled-components";

type Props = {};

function toDo({}: Props) {
  const [ToDos, setToDos] = useState<string[]>([]);
  const [currentToDo, setCurrentToDo] = useState<string>("");

  const handleToDoInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentToDo(event.target.value);
  };

  const handleAddToDo = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (currentToDo) {
      setToDos([...ToDos, currentToDo]);
      setCurrentToDo("");
    }
  };

  const handleDelete = () => {
    setToDos([]);
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
        <button type="submit">Add ToDo</button>
      </form>
      <ul>
        {ToDos.map((ToDo, index) => (
          <li key={index}>{ToDo}</li>
        ))}
      </ul>
      <button onClick={handleDelete}>Delete Completed</button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 40%;
  margin: 10vh auto;
  background: lightgreen;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  gap: 3rem;
`;

export default toDo;
