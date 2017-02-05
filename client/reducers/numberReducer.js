import { ADD_NUMBER } from '../actions/types';

const initialState = {
    number: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_NUMBER:
            return { ...state, number: state.number += action.payload };
            break;
            default:
            return { ...state };
    }
}
