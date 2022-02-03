enum Types {
    FETCH_INITIAL_DATA = "initialData/FETCH_INITIAL_DATA",
}

export const fetchInitialData = () => ({ type: Types.FETCH_INITIAL_DATA });

export default Types;
