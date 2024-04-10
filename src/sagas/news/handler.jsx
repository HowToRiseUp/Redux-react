import { call, put } from "redux-saga/effects"
import requestGetNews from "./request"
import { setNews } from "./newsSlice";

export default function* handleGetUser() {
    try {
        const response = yield call(requestGetNews);
        const { hits } = response.data;
        yield put(setNews(hits))
    } catch (error) {
        console.log("🚀 ~ function*handleGetUser ~ error:", error)
    }
}