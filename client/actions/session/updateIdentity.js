import axios from 'axios';
import { host } from '../../helpers/constants/host';
import { UPDATE_IDENTITY } from '../types';
import { updateVideoClient } from './updateVideoClient';

export function updateIdentity(payload) {
  return (dispatch) => {
    console.log('host', host);
    return axios.get(`${host}/twilio/get-video-token`)
                .then((tokenRes) => {
                    console.log('tokenRes From Twilio api route', tokenRes);
                    dispatch(updateVideoClient(tokenRes.data.success.token));
                    return {
                        type: UPDATE_IDENTITY,
                        payload: tokenRes.data.identity
                    };
                })
                .catch((err) => {
                    console.log('Error in update identity action handler', err);
                    return {
                        type: UPDATE_IDENTITY,
                        payload: ''
                    }
                });
  };
}
