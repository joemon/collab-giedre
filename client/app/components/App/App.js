import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Search from "../App/Search";
import SearchResults from "../App/SearchResults";
import BingSearch from "../App/BingSearch";
import ReactDOM from 'react-dom';

const App = ({ children }) => (

  <div class="col 12">

    <Header /> 

    <div class="row">

    	<div class="col s2 blue-grey lighten-6 z-depth-1">

    	<h5> Query History </h5> 

      <p>fakequery1</p>

    	</div> 

  		  <div class="col s5 blue-grey lighten-4">

  		   			<Search />

        </div>

  		<div class="col s5 light-blue lighten-4">

  		 Shared tab goes here

      </div> 

    </div>

    <Footer />

  </div>

);


export default App;