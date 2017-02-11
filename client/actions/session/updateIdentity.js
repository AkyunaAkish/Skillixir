import axios from 'axios';
import { host } from '../../helpers/constants/host';
import { UPDATE_IDENTITY } from '../types';
import { updateVideoClient } from './updateVideoClient';

export function updateIdentity(payload) {
    return (dispatch) => {
        return axios.get(`${host}/twilio/get-video-token`)
            .then((tokenRes) => {
                dispatch(updateVideoClient(new Twilio.Video.Client(tokenRes.data.success.token)));
                dispatch({
                    type: UPDATE_IDENTITY,
                    payload: tokenRes.data.success.identity
                });
            })
            .catch((err) => {
                console.log('Error in update identity action handler', err);
            });
    };
}
