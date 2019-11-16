import React, { useState, useEffect } from "react";
import { getPopularMovies } from "./services/dataService";
import "./App.css";

function App() {
    const [movies, setData] = useState([]);

    const fetchData = async () => {
        const result = await getPopularMovies();
        setData(result.results);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ul>
            {movies.map(item => (
                <li key={item.id}>
                    <a href={item.url}>{item.title}</a>
                </li>
            ))}
        </ul>
    );
}

export default App;
