import logo from './lotr.png';
import Movie from './Movie';
import './App.css';

function App() {
    const movies = [
        { title: 'The Fellowship of the Ring', hours: '2', minutes: '58' },
        { title: 'The Two Towers', hours: '2', minutes: '59' },
        { title: 'The Return of the King', hours: '3', minutes: '21' }
    ];

    const displayFilms = movies.map((movie, index) => {
        return <Movie {...movie} key={`movie ${index}`} />;
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <div className="App">{displayFilms}</div>
            </header>
        </div>
    );
}

export default App;
