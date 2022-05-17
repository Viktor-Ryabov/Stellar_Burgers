import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import { rootReducer } from "./services/reducers/index.js";

export const store = createStore(rootReducer, enhancer);