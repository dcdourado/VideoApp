import React from "react";

class SearchBar extends React.Component{
    state = {term: ""};

    onInputChange = (event) => {
        this.setState({term: event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        //CALLBACK FROM PARENT COMPONENT
        this.props.onFormSubmit(this.state.term);
    };

    render(){
        return(
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} action="" className="ui form">
                    <div className="field">
                        <label htmlFor="searchbar">Video Search</label>
                        <input id="searchbar" type="text" name="" value={this.state.term} 
                               onChange={this.onInputChange} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;