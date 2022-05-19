import React, { useRef } from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void; //function returns nothing
}
const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="input"
      placeholder="Enter a task"
      onSubmit={(e) => {
        handleAdd(e);
      }}
    >
      <input
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        className="input_box"
        type="input"
        placeholder="enter a task"
      />
      <button className="input_submit">go</button>
    </form>
  );
};

export default InputField;
