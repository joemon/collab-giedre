import React, { Component } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Search from "../App/Search";
import SearchResults from "../App/SearchResults";
import BingSearch from "../App/BingSearch";
import ReactDOM from 'react-dom';



// var mongoose = require('mongoose');
// var Schema   = mongoose.Schema;

// var user = new Schema({
//           name: {type: String, required : true}
// });

// module.exports = mongoose.model('user', user);


const App = ({children}) => (

  <div class = "blue-grey"> 
    <Header/> 

      <body>

      <div class = "container yellow">
        
        <div id="content" class="row z-depth-2"> 
              <div id="history" class="col s2 white center-align">
                <h5 class="white">Query history</h5> 
                <div class="divider"></div>
                <p class="flow-text">Query</p>
              </div> 
              <div id="selftab" class="col s5 white">
                <Search/> 
              </div>
              <div id="sharedtab" class="col s5 grey">
                5width 
              </div> 
        </div>
      
        </div>

      </body>
  </div> 

);

export default App; 

// const App = ({ children }) => (

//   <div class="col 12">

//     <Header /> 

//     <div class="row">

//     	<div class="col s2 blue-grey lighten-6 z-depth-1">

//     	<h5> Query History </h5> 

//       <p>fakequery1</p>

//     	</div> 

//   		  <div class="col s5 blue-grey lighten-4">

//   		   			<Search />

//         </div>

//   		<div class="col s5 light-blue lighten-4">

//   		 Shared tab goes here

//       </div> 

//     </div>

//     <Footer />

//   </div>

// );


// export default App;