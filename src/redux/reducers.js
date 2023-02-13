import { ALL_CHARACTERS, ALL_CHARACTERS_COPY } from "./actions/action-types";

const initialState = {
  allCharacters: [],
  allCharactersCopy: [],
  character: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_CHARACTERS:
      console.log(payload)
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
    default:
      return { ...state };
  }
};


export default reducer;
