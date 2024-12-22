export const sortByTime = (array) => {
    return array.sort((a, b) => {
        let dateA = new Date(a.createDate);
        let dateB = new Date(b.createDate);
        return dateA - dateB;
    });
};
