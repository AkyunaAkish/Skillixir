import { UPDATE_PREVIEW_MEDIA } from '../types';

export function updatePreviewMedia(payload) {
    return {
        type: UPDATE_PREVIEW_MEDIA,
        payload: payload
    };
}
