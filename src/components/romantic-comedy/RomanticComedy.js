import React from 'react';
import MovieCard from '../movie-card/MovieCard';
import ContentPage1 from '../../assets/API/CONTENTLISTINGPAGE-PAGE1.json';
import ContentPage2 from '../../assets/API/CONTENTLISTINGPAGE-PAGE2.json';
import ContentPage3 from '../../assets/API/CONTENTLISTINGPAGE-PAGE3.json';
class RomanticComedy extends React.Component {

state = {
    movies: [],
    per: 2,
    page: 1,
    totalPages: 3,
    scrolling: false
}
    
componentWillMount() {
    this.loadMovies();
    this.scrollListner = window.addEventListener('scroll', (e) => {
        this.handleScroll(e);
    })
}
handleScroll = (e) => {
    const {scrolling,totalPages,page} = this.state;
    if(scrolling) return;
    if(totalPages <= page) return;
    const lastLi = document.querySelector('.content-items .movie-card:last-child');
    const lastLiOffset = lastLi.offsetTop + lastLi.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    var bottomOffset = 20;
    if(pageOffset > lastLiOffset - bottomOffset) {
        this.loadMore();
    }
}
loadMovies(){
    const { per, page, movies} = this.state
    var loadedPage = (page === 1) ? ContentPage1 : (page === 2) ? ContentPage2 : ContentPage3;
    this.setState({
        movies : [...movies, ...loadedPage.page['content-items'].content],
        scrolling: false
    });
}
loadMore() {
    
    this.setState(prevState =>({
        page: prevState.page + 1,
        scrolling: true
    }),this.loadMovies);
}
render () {
    var imageUrl = 'https://raw.githubusercontent.com/vishnuprasadkv55/project-dark/master/src/assets/Slices/';
    return (<div className="p-4 pt-20 bg-black grid gap-4 grid-cols-3 content-items">
        {this.state.movies.map(function (item, index) {
            var index = 0;
            return (<MovieCard className="" key={index} name={item['name']} url={imageUrl + item['poster-image']}></MovieCard>);

        })}</div>);
}
}

export default RomanticComedy;