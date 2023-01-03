import React, { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import EgyptMap from "./components/EgyptMap/EgyptMap";

const App = () => {
    const [search, setSearch] = useState('');
    const [searchInfo, setSearchInfo] = useState([]);
    const [results, setResults] = useState([]);

    const handleSearch = async e => {
        //  e.preventDefault();

        const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;

        const response = await fetch(endpoint);

        console.log(response)

        if (!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        console.log(json)
        setResults(json.query.search);
        setSearchInfo(json.query.searchinfo);
    }

    useEffect(() => {
        handleSearch()
    }, [])

    return (
        <div className="App">
            <EgyptMap />
        </div>
    );
}

export default App; 