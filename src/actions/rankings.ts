import { Performance } from "../types";

enum Types {
    SET_PERFORMANCES = "consultants/SET_PERFORMANCES",
}

export const setPerformances = (performances: Performance[]) => ({
    type: Types.SET_PERFORMANCES,
    payload: performances,
});

export default Types;
