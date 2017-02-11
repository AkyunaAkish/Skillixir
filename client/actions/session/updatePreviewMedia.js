import { UPDATE_PREVIEW_MEDIA } from '../types';

export function updatePreviewMedia(payload) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_PREVIEW_MEDIA,
      payload: payload
    });
  };
}
