import * as request from '../utils/request';
import { endpoints } from '../utils/request';

export const createPost = async (data) => {
    try {
        const res = await request.postRQ(endpoints['createPost'], data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};

export const updatePost = async (id, data) => {
    try {
        const res = await request.putRQ(endpoints['updatePost'] + '/' + id, data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};

export const addFilePost = async (id, data) => {
    try {
        const res = await request.postRQ(endpoints['createPost'] + '/' + id + '/upload', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};

export const getListPost = async () => {
    try {
        const res = await request.getRQ(endpoints['getListPost'], {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};
export const getNewFeed = async (page) => {
    try {
        const res = await request.getRQ(endpoints['newFeed'] + '/' + page, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};
export const getListPostUser = async (data) => {
    try {
        const res = await request.getRQ(endpoints['getListPost'] + '/' + data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};

export const createComment = async (data) => {
    try {
        const res = await request.postRQ(endpoints['createComment'], data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};
export const hiddenPost = async (data) => {
    try {
        const res = await request.getRQ(endpoints['createPost'] + '/' + data + '/hidden', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};
export const hiddenComment = async (data) => {
    try {
        const res = await request.deleteRQ(endpoints['createComment'] + '/' + data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};
export const repComment = async (id, data) => {
    try {
        const res = await request.postRQ(endpoints['repComment'] + '/' + id, data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};

export const postReaction = async (id, data) => {
    try {
        const res = await request.postRQ(endpoints['postReaction'] + '/' + id, data, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};
export const unReactionPost = async (id) => {
    try {
        const res = await request.postRQ(
            endpoints['unReactionPost'] + '/' + id,
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

export const getCommentByPostId = async (id, size) => {
    try {
        const res = await request.getRQ(endpoints['getCommentByPostId'] + '/' + id + '/' + size, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};

export const getRepComment = async (id) => {
    try {
        const res = await request.getRQ(endpoints['getRepComment'] + '/' + id, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });
        return res;
    } catch (e) {}
};
