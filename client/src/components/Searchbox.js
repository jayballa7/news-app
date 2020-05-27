import React, {Component} from 'react';
import '../styles/Searchbox.scss';

class Searchbox extends Component {
    constructor(props) {
        super();
        this.state = {
            search: '',
            results: []
    }
    }
    handleInputChange = (event) => {
        this.setState({
            search: event.target.value
        },()=>{
            console.log(this.state.search)
        })
    }


    render() {
        console.log(this.state.results)
    return(
        <div>
            <form className="search-articles">
                <div><label htmlFor="searchbox">Search articles: </label>
                <input type="text" name="search" id="search" value={this.state.search} onChange={this.handleInputChange.bind(this)}/>
                <span><a href="#" type = "submit" className="search-btn" onClick={() => this.props.handleSearch(this.state.search)}>Search</a></span></div>
            </form>

        </div>
    )
    }
}
export default Searchbox;