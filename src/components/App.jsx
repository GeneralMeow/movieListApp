import React, {Component} from 'react';
import Movie from './Movie.jsx';

var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends Component {

renderMovies() {
  return movies.map((movie, index) => (
    <Movie movie={movie} key={index} />
  ))
}

 render() {
   return(
     <div>
       <div>
        <h1>MovieList</h1>
        <div className="movie-list-container">
          {this.renderMovies()}
        </div>
       </div>
     </div>
   )
 }
}




export default App;