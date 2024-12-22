export function loginUser(user, token) {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('token', token);
    return {
        type: 'LOGIN_USER',
        user: user,
        token: token,
    };
}

export function updateUser(user) {
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(user));
    return {
        type: 'UPDATE_USER',
        user: user,
    };
}

export function logoutUser() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    return {
        type: 'LOGOUT_USER',
    };
}
export function updateUserListPost(userListPost) {
    return {
        type: 'UPDATE_USERLISTPOST',
        userListPost: userListPost,
    };
}
