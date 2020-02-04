const randomMovieArray = ['Star Wars', 'Harry Potter', 'Game of Thrones'];
const randomNumber = Math.floor((Math.random() * randomMovieArray.length));
const randomMovie = randomMovieArray[randomNumber];

const url = "http://www.omdbapi.com/?i=tt3896198&apikey=6d1cdc24";

const loadMovies = () => {
    $.getJSON('http://www.omdbapi.com/?i=tt3896198&apikey=6d1cdc24&t=' + encodeURI(randomMovie)).then( response => {
        console.log(response);
    });
}

const Card = (props) => {
    return(
        <div className="movie-card">
            <h3>{props.Title}</h3>
            <p>{props.Plot}</p>
            <p>{props.Genre}</p>
            <p>{props.Year}</p>
        </div>
    );
};

const App = (props) => {
    return(
        <p>Hello</p>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root');
);