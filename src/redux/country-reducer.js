export default (state = [], { type, payload }) => {
  switch (type) {
    case 'COUNTRY_CREATE':
      return [...state, payload];
    case 'COUNTRY_UPDATE':
      let newState = state.filter(country => country.id !== payload.id);
      return [...newState, payload];
    case 'COUNTRY_DELETE':
      return state.filter(country => country.id !== payload.id);
    default:
      return state;
  }
};
