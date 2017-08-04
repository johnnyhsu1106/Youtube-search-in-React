import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    render(){
        return(
            <div className="search-bar">
                <div className="col-md-12">
                    <div className="form-group">
                        <label htmlFor="search_item" className="sr-only">Search the Youtube Film</label>
                        <input
                            type="text"
                            id="search_item"
                            className="form-control"
                            placeholder="Search the video"
                            value={this.state.term}
                            onChange={this.onInputChange} />
                    </div>
                </div>
            </div>
        );

    }
    onInputChange(event){
        const term = event.target.value
        this.setState({term});
        this.props.onSearchTermChange(term);
    }


}

export default SearchBar;
