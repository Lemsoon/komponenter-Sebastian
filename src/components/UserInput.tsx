import { useEffect, useRef, useState } from "react";
import "./userInput.scss";

export const UserInput = ({ children }: any) => {
  const [currentList, setCurrentList] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [allowAdd, setAllowAdd] = useState(true);

  const addTextToList = () => {
    console.log(currentList);
    if (inputRef.current && inputRef.current.value.length > 0 && currentList.length < 10) {
      setCurrentList((prevList) => [...prevList, inputRef.current!.value]);
    } else if (currentList.length === 10) {
      setAllowAdd(false);
    }
  };

  useEffect(() => {
    if (currentList.length < 10) {
      setAllowAdd(true);
    }
    inputRef.current!.value = "";
    inputRef.current?.focus();
  }, [currentList]);

  const removeItem = (itemIndex: number) => {
    setCurrentList((prevList) => prevList.filter((_, index) => index !== itemIndex));
  };

  return (
    <article>
      <div className="user-interaction">
        <div className="input-button">
          <input maxLength={20} type="text" name="" id="" ref={inputRef} placeholder={children} />
          <button className="add-to-list" onClick={addTextToList}>
            Add to list
          </button>
        </div>

        {!allowAdd ? <span>Cannot add more than 10 items</span> : <></>}
      </div>

      <ul className="list">
        {currentList.length === 0 ? (
          <li>List is empty</li>
        ) : (
          currentList.map((item, index) => (
            <li key={index} id={`${index}`}>
              {item} <button onClick={() => removeItem(index)}>&#10006;</button>
            </li>
          ))
        )}
      </ul>
    </article>
  );
};
