export const favoriteCheck = (selectedKey, favorites) => {
    return favorites.some(element => element.cityKey === selectedKey);
};