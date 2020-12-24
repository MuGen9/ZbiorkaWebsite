export const initialState = {
    isMobile: null
}


const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case "SET_MOBILE":
            return {
                isMobile: true
            };
        case "SET_DESKTOP":
            return {
                isMobile: false
            };

        default:
            return state;
    }
}

export default reducer;