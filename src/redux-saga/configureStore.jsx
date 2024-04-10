import createSagaMiddleware from 'redux-saga'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import logger from "redux-logger";
const reducer = combineReducers({
    cc: ""
})

const sageMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer,
    middleware: (gDM) => gDM().concat(logger, sageMiddleware)
})

