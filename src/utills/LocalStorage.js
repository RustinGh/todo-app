export const setStorageItem = (key, value) => {
    const stringifyValue = JSON.stringify(value)
    localStorage.setItem(key, stringifyValue)
}

export const getStorageItem = (key) => {
    const setValue = localStorage.getItem(key)
    const parseValue = JSON.parse(setValue)
    return parseValue
}