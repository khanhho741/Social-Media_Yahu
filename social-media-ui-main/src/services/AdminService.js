/* eslint-disable no-empty */
import * as request from '../utils/request';
import { endpoints } from '../utils/request';

export const getStatistic = async () => {
    try {
        const res = await request.getRQ(endpoints['getStatistic'] + '/', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });

        return res;
    } catch (e) {}
};

export const getAllUser = async (page) => {
    try {
        const res = await request.getRQ(endpoints['getAllUser'] + '/' + page, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });

        return res;
    } catch (e) {}
};

export const getAllPost = async (page) => {
    try {
        const res = await request.getRQ(endpoints['getAllPost'] + '/' + page, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });

        return res;
    } catch (e) {}
};

export const getAllComment = async (page) => {
    try {
        const res = await request.getRQ(endpoints['getAllComment'] + '/' + page, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });

        return res;
    } catch (e) {}
};

export const enableComment = async (commentId) => {
    try {
        const res = await request.postRQ(endpoints['enableComment'] + '/' + commentId, {}, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {
        console.error('Error enabling comment:', e);
        throw e;
    }
};

export const disableComment = async (commentId) => {
    try {
        const res = await request.postRQ(endpoints['disableComment'] + '/' + commentId, {}, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {
        console.error('Error disabling comment:', e);
        throw e;
    }
};

export const enablePost = async (postId) => {
    try {
        const res = await request.postRQ(`${endpoints.enablePost}/${postId}`, {}, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {
        console.error('Error enabling post:', e);
        throw e;
    }
};

export const disablePost = async (postId) => {
    try {
        const res = await request.postRQ(`${endpoints.disablePost}/${postId}`, {}, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {
        console.error('Error disabling post:', e);
        throw e;
    }
};

export const enableUser = async (username) => {
    try {
        const res = await request.postRQ(`${endpoints.enableUser}/${username}`, {}, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {
        console.error('Error enabling user:', e);
        throw e;
    }
};

export const disableUser = async (username) => {
    try {
        const res = await request.postRQ(`${endpoints.disableUser}/${username}`, {}, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {
        console.error('Error disabling user:', e);
        throw e;
    }
};
