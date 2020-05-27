import React, {Component} from 'react';
import '../styles/Searchbox.scss';
import axios from 'axios';
import MainPage from './MainPage';

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

    // handleSearch(e) {
    //     e.preventDefault();
    //     console.log(this.state.search);
    //     axios.get('/api/' + this.state.search).then(response => {
    //         console.log(response);
    //         this.setState({
    //             results: response.data
    //         }, () => {
    //             this.props.newsArray = [...response.data]
    //         })
    //     })
    // }


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