import React, { Component } from "react";

const urlForSearch = query => 
	'https://www.googleapis.com/customsearch/v1/siterestrict?key=AIzaSyAtempARHF8te_v7A2Bgl-RDsyAoCRr-HU&cx=005831732795557864070:iguhezg3r1g&q=pusheen' 

class BingSearch extends Component {

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

	if (this.state.searchData) return (
      <div>  

	      Total found results:
	      <p> {this.state.searchData.searchInformation.formattedTotalResults} </p>

	      Search results: 

	     			{this.state.searchData.items.map(function(item, index) {
	     				return (
	     					<div key = {index}>
	     					<p> {item.title}</p>
	     					</div>
	     				)
	     			} 
	     			)}
      </div>
    ) 

    if (!this.state.searchData) return (
  		<p>No results to display</p>
	)

	if (this.state.requestFailed) return (
  		<p>Failed </p> 
  	)

    
  }
}

export default BingSearch;
