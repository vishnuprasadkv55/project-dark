import ContentPage1 from '../assets/API/CONTENTLISTINGPAGE-PAGE1.json';
import ContentPage2 from '../assets/API/CONTENTLISTINGPAGE-PAGE2.json';
import ContentPage3 from '../assets/API/CONTENTLISTINGPAGE-PAGE3.json';
const MovieFunction = (state = [],action) => {
    switch (action.type) {
        case 'LOADMORE': {
            const loadedPage = (action.page === 1) ? ContentPage1 : (action.page === 2) ? ContentPage2 : ContentPage3;
            state = [...state, ...loadedPage.page['content-items'].content];
            return state;
        }
        case 'FILTER': {
            state = action.moviesList.filter(function (item) {
                return item['name'].toLowerCase().includes(action.value)
            });
            return state;
        }
        default:
            return state;
    }
};
export default MovieFunction;