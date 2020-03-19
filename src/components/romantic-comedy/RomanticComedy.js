import React from 'react';
import MovieCard from '../movie-card/MovieCard';
import ContentPage1 from '../../assets/API/CONTENTLISTINGPAGE-PAGE1.json';
import ContentPage2 from '../../assets/API/CONTENTLISTINGPAGE-PAGE2.json';
import ContentPage3 from '../../assets/API/CONTENTLISTINGPAGE-PAGE3.json';
import {createStore} from 'redux';

class RomanticComedy extends React.Component {
    constructor(props){
    super(props)
this.state = {
    movies: [],
    moviesList: [],
    per: 2,
    page: 1,
    totalPages: 3,
    scrolling: false,
    value: ''
}
    this.handleSearch = this.handleSearch.bind(this);

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
    const { per, page, movies, moviesList} = this.state
    var loadedPage = (page === 1) ? ContentPage1 : (page === 2) ? ContentPage2 : ContentPage3;
    this.setState({
        movies : [...movies, ...loadedPage.page['content-items'].content],
        moviesList: [...moviesList, ...loadedPage.page['content-items'].content],
        scrolling: false
    });
}
loadMore() {
    
    this.setState(prevState =>({
        page: prevState.page + 1,
        scrolling: true
    }),this.loadMovies);
}
handleSearch(event) {

var updatedMoviesArray = [];
    this.setState({value: event.target.value});
    updatedMoviesArray = this.state.moviesList.filter(function(item){
        return item['name'].toLowerCase().includes(event.target.value)
    });
    this.setState({
        movies : updatedMoviesArray
    });
  }
render () {
    
    var imageUrl = 'https://raw.githubusercontent.com/vishnuprasadkv55/project-dark/master/src/assets/Slices/';
    return (
    <div className="pt-20">
        <input  value={this.state.value} onChange={this.handleSearch} class="shadow bg-black appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline " id="username" type="text" placeholder="Search..."></input> 
    <div className="p-4 bg-black grid gap-4 grid-cols-3 content-items">
        {this.state.movies.map(function (item,index) {
            return (<MovieCard className="" key={index} name={item['name']} url={imageUrl + item['poster-image']}></MovieCard>);

        })}</div></div>);
}
}

export default RomanticComedy;