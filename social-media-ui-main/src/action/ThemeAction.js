export const enableDarkMode = () => {
    localStorage.setItem('darkTheme', true);
    return { type: 'ENABLE_DARK_MODE' };
};

export const disableDarkMode = () => {
    localStorage.setItem('darkTheme', false);
    return { type: 'DISABLE_DARK_MODE' };
};

export const openStory = (index) => {
    return { type: 'OPEN_STORY', indexSlide: index };
};

export const closeStory = () => {
    return { type: 'CLOSE_STORY' };
};

export const headerLayout = () => {
    localStorage.setItem('layoutHeader', true);
    return { type: 'USE_HEADER' };
};

export const sidebarLayout = () => {
    localStorage.setItem('layoutHeader', false);
    return { type: 'USE_SIDE_BAR' };
};
