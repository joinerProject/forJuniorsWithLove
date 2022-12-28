import { combineReducers, createStore } from "redux";
// import { UsersReducer } from "./UsersState";
import { AuthReducer } from "./AuthState";

const reducers = combineReducers({
    authState: AuthReducer
})
const store = createStore(reducers);
export default store;

/* 

// export class UserState {
//     public users: object = {};

// }
// export enum UserActionType {
//     "FetchUsers" = "FetchUsers",
//     "DeleteUser" = "DeleteUser",
// }

// export interface UserAction {
//     type: UserActionType,
//     payload: any;
// }
// export function FetchUsers(users: object): UserAction {
//     const action: UserAction = {
//         type: UserActionType.FetchUsers,
//         payload: users
//     }
//     return action;
// }

// export function DeleteUser(id: number): UserAction {
//     const action: UserAction = {
//         type: UserActionType.DeleteUser,
//         payload: id
//     }
//     return action;
// }

// export function UsersReducer(currentState: UserState = new UserState(), action: UserAction): UserState {
//     const newState = { ...currentState };
//     switch (action.type) {
//         case UserActionType.FetchUsers:
//             newState.users = action.payload;
//             break;
//         case UserActionType.DeleteUser:
//             const indexToDelete = newState.users[action.payload];
//             if (indexToDelete !== -1) {
//                 newState.users.splice(indexToDelete, 1)
//             }
//             break;
//     }
//     return newState;
// }

*/