import axios from 'axios'

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch(setLoading(false))
    axios.get(`/pizzas?${category !== null
                            ? `category=${category}`
                            : ''}&_sort=${sortBy}&_order=desc`)
        .then(({data}) => {
            dispatch(setPizzas(data))
        })
}


export const setLoading = payload => {
    return {
        type: 'SET_LOADING',
        payload
    }
}


const setPizzas = items => {
    return {
        type: 'SET_PIZZAS',
        payload: items,
    }
}

export default setPizzas

