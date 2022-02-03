import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducers/root";
import rootSaga from "./sagas/root";

interface IWindow {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}

const composeEnhancers =
    (window as IWindow).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );
    sagaMiddleware.run(rootSaga);
    return store;
};
