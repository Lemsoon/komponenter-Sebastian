import { useEffect, useRef, useState } from "react";
import "./userInput.scss";

export const UserInput = ({ children }: any) => {
  const [currentList, setCurrentList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const addTextToList = () => {
    console.log(currentList);
    if (inputRef.current && inputRef.current.value.length > 0) {
      setCurrentList((prevList) => [...prevList, inputRef.current!.value]);
    }
  };

  useEffect(() => {
    inputRef.current!.value = "";
  }, [currentList]);
  return (
    <article>
      <input maxLength={20} type="text" name="" id="" ref={inputRef} placeholder={children} />
      <button className="add-to-list" onClick={addTextToList}>
        Add to list
      </button>
      <ul className="list">
        {currentList.length === 0 ? (
          <li>List is empty</li>
        ) : (
          currentList.map((item, index) => <li key={index}>{item}</li>)
        )}
      </ul>
    </article>
  );
};
