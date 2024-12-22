import * as request from '../utils/request';
import { endpoints } from '../utils/request';

export const addFriend = async (data) => {
    try {
        const res = await request.postRQ(
            endpoints['addFriend'] + '/' + data,
            {},
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            },
        );
        return res;
    } catch (e) {}
};
export const getRelation = async (data) => {
    try {
        const res = await request.getRQ(endpoints['addFriend'] + '/' + data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};
export const deleteRelation = async (data) => {
    try {
        const res = await request.deleteRQ(endpoints['addFriend'] + '/' + data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};
export const getAllFriend = async () => {
    try {
        const res = await request.getRQ(endpoints['addFriend'] + '/friend', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};

export const getRecommendFriend = async () => {
    try {
        const res = await request.getRQ(endpoints['getRecommendFriend'], {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};

export const getInvitation = async () => {
    try {
        const res = await request.getRQ(endpoints['addFriend'] + '/invitation', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};
export const acceptFriend = async (data) => {
    try {
        const res = await request.putRQ(endpoints['addFriend'], data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};
