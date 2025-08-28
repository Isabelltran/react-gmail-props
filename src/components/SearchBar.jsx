import { useState } from "react";

function SearchBar({onSearch}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onSearch(searchTerm);
        }
    };

    const handleSearchClick = () => {
        onSearch(searchTerm);
    };

    return (
        <div className="search">
            <input 
            className="search-bar" 
            placeholder="Search mail" 
            value = {searchTerm}
            onChange = {handleInputChange}
            onKeyDown={handleKeyDown} 
            />
            <button onClick={handleSearchClick}>Search</button>
        </div>
    )
}

export default SearchBar;