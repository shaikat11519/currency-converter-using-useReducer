const reducer = (state, action) => {
    if (action.type === 'TAKA_TO_DOLLAR') {
        //console.log("taka", action.payload.currency);
        return {
            ...state,
            tk: action.payload.currency,
            usd: action.payload.currency * 0.0096

        };
    }

    if (action.type === 'DOLLAR_TO_TAKA') {
        console.log("dollar", action.payload.currency);
        return {
            ...state,
            tk: action.payload.currency * 104.21,
            usd: action.payload.currency
        };
    }

    return state;
} 

export default reducer;