import { ALL_CHARACTERS, ALL_CHARACTERS_COPY,FILTER } from "./actions/action-types";

const initialState = {
  allCharacters: [],
  allCharactersCopy: [],
  character: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_CHARACTERS:
      return {
        ...state,
        allCharacters: payload,
        
      };
    case ALL_CHARACTERS_COPY:
      return {
        ...state,
        allCharactersCopy: payload,
        allCharacters: state.allCharactersCopy

      };
    case FILTER:
      const {allCharactersCopy} = state;
      const filterChar = allCharactersCopy.filter((elem)=>elem.species === payload);
      return {
        ...state,
        allCharacters:filterChar
      }  
    default:
      return { ...state };
  }
};


export default reducer;
