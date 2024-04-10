import axios from "axios";

export default function requestGetNews() {
    return axios.request({
        method: "Get",
        url: 'http://hn.algolia.com/api/v1/search?query='
    })
}