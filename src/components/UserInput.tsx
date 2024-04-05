import React, { useEffect, useRef, useState } from "react";
import "./userInput.scss";

export const UserInput = () => {
  const [currentList, setCurrentList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const addTextToList = () => {
    console.log(currentList);
    if (inputRef.current) {
      setCurrentList((prevList) => [...prevList, inputRef.current!.value]);
    }
  };

  useEffect(() => {
    inputRef.current!.value = "";
  }, [currentList]);
  return (
    <article>
      <input maxLength={20} type="text" name="" id="" ref={inputRef} />
      <button className="add-to-list" onClick={addTextToList}>
        Add to list
      </button>
      <ul className="list">
        {currentList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
};
