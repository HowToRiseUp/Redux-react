
// Watcher Saga

import { takeLatest } from "redux-saga/effects";
import { getNews } from "./newsSlice";
import handleGetUser from "./handler";

export default function* newsSaga() {
    // Gọi api 10 lần lấy cái cuối cùng
    yield takeLatest(getNews.type, handleGetUser)
}