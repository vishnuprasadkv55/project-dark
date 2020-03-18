import React from 'react';
import MovieCard from './MovieCard';
import ContentPage1 from '../assets/API/CONTENTLISTINGPAGE-PAGE1';
function LandingPage() {
    var imageUrl;
return ContentPage1.page['content-items'].content.map(function(item,index){
    console.log(imageUrl + item['poster-image']);
    return <MovieCard key={index} url={imageUrl + item['poster-image']}></MovieCard>
})
}
export default LandingPage;