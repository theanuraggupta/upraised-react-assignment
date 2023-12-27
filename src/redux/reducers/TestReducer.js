import { SET_ALL_QUESTIONS } from "../actions/actionType";
import { updateObject } from "../util";

const initalState = {
    questions: []
};

const setAllQuestions = (state, action) => {
    const updatedAllState = updateObject(state.questions, action.questions);
    const updateState = {
        questions: updatedAllState
    };
    return updateObject(state, updateState);
};

const TestReducer = (state = initalState, action) => {
    switch (action.type) {
        case SET_ALL_QUESTIONS: 
            return  setAllQuestions(state, action)
        default:
            return state;
    }
};

export default TestReducer;