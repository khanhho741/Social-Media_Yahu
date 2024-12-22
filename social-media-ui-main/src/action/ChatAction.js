export function updateCurrentRoom(currentRoom) {
    return {
        type: 'UPDATE_CURRENTROOM',
        currentRoom: currentRoom,
    };
}
export function updateCount(count) {
    return {
        type: 'UPDATE_COUNT',
        count: count,
    };
}
