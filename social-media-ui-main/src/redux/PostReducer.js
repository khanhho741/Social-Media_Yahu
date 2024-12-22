const initialState = {
    listPost: [],
    detailPost: {},
};

const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_LISTPOST':
            return {
                ...state,
                listPost: action.listPost,
            };
        case 'UPDATE_DETAIL_POST':
            return {
                ...state,
                detailPost: action.detailPost,
            };
        default:
            return state;
    }
};

export default postReducer;
