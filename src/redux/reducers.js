import { ALL_CHARACTERS } from "./actions/action-types";

const initialState = {
  allCharacters: [],
  character: {},
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ALL_CHARACTERS:
      return {
        ...state,
        allCharacters:payload,
      };
  
    default:
      return { ...state };
  }
};

export default reducer;
