import React from "react";
import SearchBar from './SearchBar';

function NavBar(props) {

    let imgStyle = {
        width: '152px',
        height: '35px',
    }

    return (
        <header>
            <div className="header-cont">
                <div>
                    <img alt="Lider Logo" src={"img/lider-logo.svg"} style={imgStyle}></img>
                </div>
                <SearchBar onNavSearch={props.onSearch}/>
            </div>
        </header>
    );
}

export default NavBar;