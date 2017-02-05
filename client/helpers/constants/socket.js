import { host } from './host';
import io from 'socket.io-client';

export const socket = io.connect(host);
