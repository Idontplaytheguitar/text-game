import { SET_MAIN_TEXT, SET_STAGE } from "../Constants";

const initialState = {
    stage: 0,
    mainText: "",
};


export default function Reducer(state = initialState, action) {
    switch (action.type) {

        // --------------------------Internals --------------------------
        
        case SET_STAGE:
            return {
                ...state,
                stage: action.payload
            };
            

        // -------------------------Main Text-------------------------

        case SET_MAIN_TEXT:
            return {
                ...state,
                mainText: action.payload
            };

        default:
            return state;
    }
}
