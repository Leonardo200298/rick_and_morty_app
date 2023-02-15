import { ALL_CHARACTERS, ALL_CHARACTERS_COPY, FILTER, ORDERBY } from "./actions/action-types";

const initialState = {
  allCharacters: [],
  allCharactersCopy: [],
  character: {},
  error: {}
};

const reducer = (state = initialState, { type, payload }) => {
  /*  console.log(state.allCharactersCopy);
   console.log(state.allCharacters); */
  switch (type) {
    case ALL_CHARACTERS:
      console.log(payload);
      let error;
      if (payload === "Request failed with status code 404") {
        console.log("entre")
        error = payload;
      }
      return {
        ...state,
        allCharacters: payload,
        error: error

      };

    case ALL_CHARACTERS_COPY:
      return {
        ...state,
        allCharactersCopy: payload,
        allCharacters: state.allCharactersCopy

      };
    case FILTER:
      const { allCharactersCopy } = state;
      const filterChar = allCharactersCopy.filter((elem) => elem.species === payload);
      return {
        ...state,
        allCharacters: filterChar
      }
    case ORDERBY:

      let order = [...state.allCharactersCopy];//es como en el [event.target.value],
      // sera un cambio constante
      if (payload === 'ascendence') {
        order.sort((a, b) => a.name.localeCompare(b.name))

      }
      if (payload === 'descendences') {
        order.sort((a, b) => b.name.localeCompare(a.name))
      }
      return {
        ...state,
        allCharacters: order
      }
    default:
      return { ...state };
  }
};


export default reducer;
