import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import logger from "redux-logger";
import { reducer } from './reducers';
import rootSaga from './rootSaga';


const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, sagaMiddleware),
})

sagaMiddleware.run(rootSaga)

export default store;
// sagaMiddleware.run(mySaga)
