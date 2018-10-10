// // reducer is where the actual state goes
// // responses get sent here
// // and then can add this to the component

// // bring the type of actions into here
// import { GET_ITEMS_BY_SEARCH, GET_ITEMS_BY_CATEGORY, ITEMS_LOADING } from "../actions/types";

// // set initial state for searchresultsmain 
// const initialState = {
//     items: [],
//     loading: false
// };

// //export the state listed above
// export default function (state = initialState, action) {
//     // these cases will allow to use the actions folder
//     // to run the particular query and return those results
//     // and set that to state
//     switch (action.type) {
//         case GET_ITEMS_BY_SEARCH:
//             return {
//                 ...state,
//                 items: action.payload,
//                 loading: false,
//             };
//         case GET_ITEMS_BY_CATEGORY:
//             return {
//                 ...state,
//                 items: state.items.filter(item => item.category === action.payload)
//             };
//             case ITEMS_LOADING:
//             return {
//                 // gets the initial state
//                 ...state,
//                 loading: true
//             }
//         default:
//             return state;
//     }
// }