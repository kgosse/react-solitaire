import { combineReducers } from 'redux';
import deck from './deck';
import remainder from './remainder';

const reducers = combineReducers({
  deck,
  remainder
});

export default reducers;