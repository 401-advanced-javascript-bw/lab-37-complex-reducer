import { combineReducers } from 'redux';
import cities from './city-reducer';
import countries from './country-reducer';

export default combineReducers({
  cities,
  countries,
});
