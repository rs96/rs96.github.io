declare module "ReduxTypes" {
    import { StateType, ActionType } from "typesafe-actions";
    export type ReducerState = StateType<
        typeof import("./reducers/root").default
    >;
}
