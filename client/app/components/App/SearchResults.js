import React, { Component } from "react";

const urlForSearch = query => 
'https://www.googleapis.com/customsearch/v1/siterestrict?key=AIzaSyCBxfZnmNmPktPM_uzvxH8ZS3poBQSDQco&cx=005831732795557864070:mrprqmaf-ma&q=${query}'
//'https://www.googleapis.com/customsearch/v1/siterestrict?key=AIzaSyAtempARHF8te_v7A2Bgl-RDsyAoCRr-HU&cx=005831732795557864070:iguhezg3r1g&q=${query}' 
// 'https://www.googleapis.com/customsearch/v1?key=AIzaSyAtempARHF8te_v7A2Bgl-RDsyAoCRr-HU&cx=005831732795557864070:iguhezg3r1g&q=${query}' 
//'https://www.googleapis.com/customsearch/v1/siterestrict?key=AIzaSyBwiaT18CFVqsRvhnLfOERSozHNgSNIkkQ&cx=005831732795557864070:ur962c80qs8&q=pusheencat' 

class SearchResults extends Component {
  constructor(props) {
  	super(props)
  	this.state = {
  		requestFailed: false
  	}
  }

  componentDidMount() {
    fetch(urlForSearch(this.props.query))
    .then(response => {
    	if (!response.ok){
    		throw Error("Network request failed")
    	}

      return response
    })
    .then(d => d.json())
    .then(d => {
      this.setState({
        searchData:d
      })
    }, () => {
    	this.setState({
    		requestFailed: true
    	})
    })
  }

  render() {

  if (this.state.requestFailed) return <p>Failed </p>
  if (!this.state.searchData) return <p>No results to display</p>
	return (
      <div>  
	      Total found results:
	      <p> {this.state.searchData.searchInformation.formattedTotalResults} </p>
	      Search results: 
	     			{this.state.searchData.items.map(function(item, index) {
	     				return (
	     					<div key = {index}>
	     					{item.title}
	     					</div>
	     				)
	     			} 
	     			)}
      </div>
    ) 
    
  }
}

export default SearchResults;
