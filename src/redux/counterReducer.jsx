const INCREMENT = "increment"
const DECREMENT = "dencrement"
const PLUSBYVALUE = "plusbyvalue"

const intialState = {
    count: 0
}

export const increment = () => ({
    type: INCREMENT,
    // payload: value
})
export const dencrement = () => ({
    type: DECREMENT
})
export const plusbyvalue = (value) => ({
    type: PLUSBYVALUE,
    payload: value
})

function counterReducer(state = intialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state, count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state, count: state.count - 1
            }
        case PLUSBYVALUE:
            return {
                ...state, count: state.count + action.payload
            }
        default:
            return {
                ...state
            }
    }
}

export default counterReducer;