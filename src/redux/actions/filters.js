export const setsortby = sortType => {
    return {
        type: 'SET_SORT_BY',
        payload: sortType
    }
}

export const setCategory = index => {
    return {
        type: 'SET_CATEGORY',
        payload: index
    }
}