import { UPDATE_VIDEO_CLIENT } from '../types';

export function updateVideoClient(payload) {
    return {
        type: UPDATE_VIDEO_CLIENT,
        payload: payload
    };
}
