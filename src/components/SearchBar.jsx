import React, { useState } from "react";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

function SearchBar(props) {

    const [searchText, setSearchText]  = useState('');

    function handleChange(event) {
        const newValue = event.target.value;
    
        setSearchText(newValue);
    }

    function handleKeyDown(event)  {
        if (event.key === 'Enter') {
            submitSearch();
        }
    }

    function submitSearch() {
        console.log('submitSearch', searchText);
        props.onNavSearch(searchText);
    }

    return (
        <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="custom-search-box input-group">
                <input 
                    className="form-control search-input"
                    placeholder="¿Qué estás buscando?"
                    onChange={handleChange}
                    value={searchText}
                    onKeyDown={handleKeyDown}
                />
                <IconButton className="search-button" onClick={submitSearch}>
                    <SearchIcon/>
                </IconButton>
            </div>
        </div>

    );
}

export default SearchBar;