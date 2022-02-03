import Types from "../actions/rankings";

const INITIAL_STATE: Performance[] = [];

const reducer = (
    state: Performance[] = INITIAL_STATE,
    action: { type: string; payload: Performance[] }
): Performance[] => {
    switch (action.type) {
        case Types.SET_PERFORMANCES:
            console.log({ a: action.payload });
            if (action.payload) {
                return action.payload;
            }
            return INITIAL_STATE;
        default:
            return state;
    }
};

export default reducer;
