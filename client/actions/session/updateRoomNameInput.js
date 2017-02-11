import { UPDATE_ROOM_NAME_INPUT } from '../types';

export function updateRoomNameInput(payload) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_ROOM_NAME_INPUT,
      payload: payload.target.value
    });
  };
}
