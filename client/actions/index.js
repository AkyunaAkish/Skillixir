import { ADD_NUMBER } from './types';

export function addNumber() {
    return {
        type: ADD_NUMBER,
        payload: 1
    };
}
