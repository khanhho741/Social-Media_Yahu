const initialState = {
    user: JSON.parse(localStorage.getItem('user')),
    token: localStorage.getItem('token'),
    userListPost: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                user: action.user,
                token: action.token,
            };
        case 'UPDATE_USER':
            return {
                ...state,
                user: action.user,
            };

        case 'LOGOUT_USER':
            return {
                ...state,
                user: null,
                token: null,
            };
        case 'UPDATE_USERLISTPOST':
            return {
                ...state,
                userListPost: action.userListPost,
            };
        default:
            return state;
    }
};

export default userReducer;
