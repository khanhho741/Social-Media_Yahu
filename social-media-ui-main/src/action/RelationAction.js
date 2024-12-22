export function updateRelation(status) {
    return {
        type: 'UPDATE_RELATION',
        status: status,
    };
}

export function updateFriend(listFriend) {
    return {
        type: 'UPDATE_FRIEND',
        listFriend: listFriend,
    };
}
