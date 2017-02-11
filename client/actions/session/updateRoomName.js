import { UPDATE_ROOM_NAME } from '../types';

export function updateRoomName(payload) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_ROOM_NAME,
      payload: payload
    });
  };
}
