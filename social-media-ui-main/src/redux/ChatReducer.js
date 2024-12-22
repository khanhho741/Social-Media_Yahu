const initialState = {
    currentRoom: {},
    count: 0,
};

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_CURRENTROOM':
            return {
                ...state,
                currentRoom: action.currentRoom,
            };
        case 'UPDATE_COUNT':
            return {
                ...state,
                count: action.count,
            };
        default:
            return state;
    }
};

export default chatReducer;
