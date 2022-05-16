import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import { rootReducer } from '../reducers/reducers-index';
import thunk from "redux-thunk";
import { compose } from "redux";

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const actionLoger = store => next => action => {
    console.log(`Action: ${action.type}`);
    console.log(store);
    return next(action);
};

const enhancer = composeEnhancers(applyMiddleware(thunk, actionLoger));
const store = createStore(rootReducer, enhancer);

export default store;