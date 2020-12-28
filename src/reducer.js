export const initialState = {
    isMobile: null,
    loggedIn: null,
}


const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_MOBILE":
            return {
                ...state,
                isMobile: true
            };
        case "SET_DESKTOP":
            return {
                ...state,
                isMobile: false
            };

        default:
            return state;
    }
}

export default reducer;