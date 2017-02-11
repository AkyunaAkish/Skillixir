import { UPDATE_ACTIVE_ROOM } from '../types';

export function updateActiveRoom(payload) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_ACTIVE_ROOM,
      payload: payload
    });
  };
}
