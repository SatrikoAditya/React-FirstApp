export function addFavorite(image, name) {
    return {
        type: 'ADD_FAVORITES',
        payload: {
            image, name
        }
    }
}