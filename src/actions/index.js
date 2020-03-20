export const LOADMORE = 'LOADMORE';
export const FILTER = 'FILTER';

export const loadMore = (page) => {
    return {
        type: LOADMORE,
        page: page
    }
}

export const filter = (moviesList, value) => {
    return {
        type: FILTER,
        moviesList: moviesList,
        value: value
    }
}