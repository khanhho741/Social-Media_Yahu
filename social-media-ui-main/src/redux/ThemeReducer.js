const storedTheme = localStorage.getItem('darkTheme');
const defaultTheme = storedTheme ? storedTheme === 'true' : false;
const initialState = { isDarkModeEnabled: defaultTheme };

const layoutTheme = localStorage.getItem('layoutHeader');
// layout default is header layout
const defaultLayout = layoutTheme ? layoutTheme === 'true' : true;
const layoutState = { isHeaderLayout: defaultLayout };

const storyState = { isOpen: false, indexSlide: 0 };

export const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ENABLE_DARK_MODE':
            return { ...state, isDarkModeEnabled: true };
        case 'DISABLE_DARK_MODE':
            return { ...state, isDarkModeEnabled: false };
        default:
            return state;
    }
};

export const storyReducer = (state = storyState, action) => {
    switch (action.type) {
        case 'OPEN_STORY':
            return { ...state, isOpen: true, indexSlide: action.indexSlide };
        case 'CLOSE_STORY':
            return { ...state, isOpen: false };
        default:
            return state;
    }
};

export const layoutReducer = (state = layoutState, action) => {
    switch (action.type) {
        case 'USE_HEADER':
            return { ...state, isHeaderLayout: true };
        case 'USE_SIDE_BAR':
            return { ...state, isHeaderLayout: false };
        default:
            return state;
    }
};
