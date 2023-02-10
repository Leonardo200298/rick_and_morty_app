/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
/* import { getCharacterByName } from "../../redux/actions/actions"; */
import { getAllCharacters } from '../../redux/actions/actions';
import Cards from "../Cards/Cards";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
 

  useEffect(() => {
    handleSearch();
  }, []);
  const handleSubmit = (e) => {
    [e.target.name] = e.target.value;
    setInput(e.target.value);
  };
  const handleSearch = () => {
    dispatch(getAllCharacters(input));
  };
  return (
    <div>
      <input
        onChange={(e) => handleSubmit(e)}
        name="name"
        type="text"
        value={input}
      />
      <button onClick={handleSearch} type="submit">
        search
      </button>
      <div>
        <Cards/>
      

      </div>
    </div>
  );
}
