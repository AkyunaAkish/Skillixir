import {
  UPDATE_VIDEO_CLIENT,
  UPDATE_ACTIVE_ROOM,
  UPDATE_PREVIEW_MEDIA,
  UPDATE_IDENTITY,
  UPDATE_ROOM_NAME,
  UPDATE_ROOM_NAME_INPUT
} from '../actions/types';

const initialState = {
  videoClient: '',
  activeRoom: '',
  previewMedia: '',
  identity: '',
  roomName: '',
  roomNameInput: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_VIDEO_CLIENT:
    return { ...state, videoClient: action.payload };
    break;
    case UPDATE_IDENTITY:
    return { ...state, identity: action.payload };
    break;
    case UPDATE_ACTIVE_ROOM:
    return { ...state, activeRoom: action.payload };
    break;
    case UPDATE_PREVIEW_MEDIA:
    return { ...state, previewMedia: action.payload };
    break;
    case UPDATE_IDENTITY:
    return { ...state, videoClient: action.payload };
    break;
    case UPDATE_ROOM_NAME:
    return { ...state, roomName: action.payload };
    break;
    case UPDATE_ROOM_NAME_INPUT:
    return { ...state, roomNameInput: action.payload };
    break;
    default:
    return { ...state };
  }
}
