import React, { useEffect, useRef, useState } from "react";

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
      <input type="text" name="" id="" ref={inputRef} />
      <button className="add-to-list" onClick={addTextToList}>
        Add to list
      </button>
      <ul>
        {currentList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </article>
  );
};
