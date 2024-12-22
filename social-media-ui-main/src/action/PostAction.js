export function updateListPost(listPost) {
    return {
        type: 'UPDATE_LISTPOST',
        listPost: listPost,
    };
}

export function updateDetailPost(detailPost) {
    return {
        type: 'UPDATE_DETAIL_POST',
        detailPost: detailPost,
    };
}
