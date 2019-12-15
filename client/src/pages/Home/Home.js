import React, { Component } from 'react';
import Header from "../../components/Header";

//import SearchBar from "../../components/SearchBar";
//import SearchButton from "../../components/SearchButton";


class Home extends Component {


  render() {
    /*
    console.log("lshviugesivgsiuegvouysegouyfeuysfuysfuysfeuy")
    console.log(`this is the "this.props.history' object: `)
    console.log(this.props.history)
    console.log(`this is the "this.history' object: ${this.history}`)
    */
    return (

        <div>
            <Header history={this.props.history}/>

          
        </div>

  // {/* Note: the 'history object' is located at the 'this.props.history' */}
  // {/* and *needs* to be passed to the header in order for the components within the  */}
  // {/* header (ei the search button) to access the the current URL and */}
  // {/*then change the URL to land on the 'Search Results Page' */}
  // {/* Since the 'components' like the 'header' don't have a dedicated route, they  */}
  // {/* don't have a 'built-in' history object and must be passed */}
  // {/* this object by the parent component */}

    );
  }
}


export default Home;