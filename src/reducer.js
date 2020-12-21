export const initialState = {
    mobile: null
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_MOBILE":
            return {
                ...state,
                mobile: action.mobile,
            };

        default:
            return state;
    }
}

export default reducer;