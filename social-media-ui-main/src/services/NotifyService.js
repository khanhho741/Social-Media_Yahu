import * as request from '../utils/request';
import { endpoints } from '../utils/request';

export const getNotify = async () => {
    try {
        const res = await request.getRQ(endpoints['getNotify'], {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};
export const seenNotify = async (data) => {
    try {
        const res = await request.postRQ(endpoints['seenNotify'], data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};
export const createNotify = async (data) => {
    try {
        const res = await request.postRQ(endpoints['createNotify'], data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};
