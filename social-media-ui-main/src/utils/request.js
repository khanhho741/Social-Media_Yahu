    import axios from 'axios';

    export let endpoints = {
        customerLogin: '/login/customer',
        adminLogin: 'login/admin',
        customerRegister: '/user/create',
        customerUpdate: '/user/update-profile',
        changeAvatar: '/user/change-avatar',
        searchByName: '/user/search',
        userProfile: '/user',
        createPost: '/post',
        getListPost: '/post/user',
        createComment: '/comment',
        getUserListPost: '/post/user',
        repComment: '/comment/rep',
        addFriend: '/relationship',
        newFeed: '/post/new-feed',
        getNotify: '/notify/user',
        seenNotify: '/notify/seen',
        createNotify: '/notify',
        postReaction: '/post/reaction',
        unReactionPost: '/post/un-reaction',
        getCommentByPostId: '/comment/post',
        getRepComment: '/comment/child-comment',
        getRecommendFriend: '/user/recomend-friend',
        getCountFriend: '/user/count-friend',
        getListFriend: '/user/list-friend',
        getAllUser: '/admin/all-user',
        getAllPost: '/admin/all-post',
        getAllComment: '/admin/all-comment',
        getStatistic: 'statistic/get-data',
        uploadFileChat: 'user/upload-file',
        checkImage: 'https://detect.roboflow.com/violence-detection-s9acq/1',
        updatePost: 'post/update',
        forgotPassword: '/user/forgot-password',
        sendVerifyCode: '/user/send-verify',
        changePassword: '/user/change-password',
        enableComment: '/admin/comment/enable',
        disableComment: '/admin/comment/disable',
        enablePost: '/admin/post/enable',
        disablePost: '/admin/post/disable',
        enableUser: '/admin/user/enable',
        disableUser: '/admin/user/disable'

    };
    const request = axios.create({
        baseURL: "http://localhost:8080/api/v1",
    });

    
    export const getRQ = async (path, options = []) => {
        const response = await request.get(path, options);
        return response.data;
    };

    export const postRQ = async (path, data, headers) => {
        const response = await request.post(path, data, headers);
        return response.data;
    };
    export const putRQ = async (path, data, headers) => {
        try {
            const response = await request.put(path, data, headers);
            return response.data;
        } catch (error) {
            // Log the error for debugging
            console.error('Request error:', error);
            
            // Return proper error response
            throw error;
        }
    };

    export const deleteRQ = async (path, options = []) => {
        const response = await request.delete(path, options);
        return response.data;
    };
    export default request;

