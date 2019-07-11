const defaultState = {};

export default (state = defaultState, { type, payload }) => {
  let updatedState = null;
  let countryId = null;
  let countryCities = null;
  let targetCityId = null;

  switch (type) {
    case 'COUNTRY_CREATE':
      return { ...state, [payload.id]: [] };
    case 'COUNTRY_DELETE':
      updatedState = { ...state };
      delete updatedState[payload.id];
      return updatedState;
    case 'CITY_CREATE':
      countryId = payload.countryId;
      countryCities = state[countryId];
      return { ...state, [countryId]: [...countryCities, payload] };
    case 'CITY_UPDATE':
      return state[payload.countryId].map(city => {
        if (city.id === payload.id) {
          city.name = payload.name;
        }
        return city;
      });
    case 'CITY_DELETE':
      targetCityId = payload.id;
      countryId = payload.countryId;
      countryCities = state[countryId];
      return {
        ...state,
        [countryId]: countryCities.filter(city => city.id !== targetCityId),
      };
    default:
      return state;
  }
};
