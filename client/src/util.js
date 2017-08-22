export const tempId = () => Math.round(Math.random() * -1000000);

export const findById = idToFind => ({ id }) => id === idToFind;
