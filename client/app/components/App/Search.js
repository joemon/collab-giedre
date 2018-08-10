import React, { Component } from "react";
import SearchResults from "../App/SearchResults";
import BingSearch from "../App/BingSearch";
import axios from 'axios';

class Search extends React.Component {

  constructor(props) {

    $(document).ready(function(){ 
       $('.tabs').tabs();
    });

    super(props);
    this.state = {query: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({query: event.target.value})
  }

  handleSubmit(event) {
    console.log('A query was submitted: ' + this.state.query);
     event.preventDefault();
    this.postQuery(this.state.query)
  }

  postQuery(value) {

    console.log('Attempting to save a query');
    axios.post('/server/routes/api/queries', {
      content:value
    })
  }

  render() {  

        console.log("render");
    
    return ( 
        <div class = "row">
   
            <div class = "col s12"> 
             
            <form onSubmit={this.handleSubmit}>
                <label>
                     Enter a search query: <input type="text" query={this.state.query} onSubmit={() => this.postQuery(value)} onChange={this.handleChange} />
                </label>
                <input type="submit"/>
            </form>

            <div> 
              <SearchResults query={this.state.query}/> 
            </div>

            </div> 
            <div class = "col s12" id="bing"> 
              <BingSearch /> 
            </div> 
          </div>

    )
  }
}

export default Search; 