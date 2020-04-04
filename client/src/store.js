import { createStore } from 'redux';
import { countReducer } from './modules/testFeature/countReducer';

const store = createStore(countReducer);
export default store;