import React from 'react';
import '../styles/Searchbox.scss';

function Searchbox() {
    return(
        <div>
            <form className="search-articles">
                <div><label htmlFor="searchbox">Search articles: </label>
                <input type="text" name="search" id="search"/>
                <span><a href="#" type = "submit" className="search-btn">Search</a></span></div>
            </form>
        </div>
    )
}
export default Searchbox;