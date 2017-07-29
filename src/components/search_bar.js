//Exporting modules, classes, states
//Just to make sure we have an input at the top and update the information

import React, {Component} from 'react';


//Define a new class called search bar and give it access from the React.Component class
//class based component: Aware of itself and what the user has typed
//ES6 class: Javascript object with properties  and methods.
//class SearchBar extends React.Component
//Class based components
class SearchBar extends Component {

    constructor(props) {
        super(props);  //Component has its own constructor function, so we are calling the parent method
                       //by calling super (Calling the parent method).

        this.state = {term: ''}; //We initalize state by create a new object and assigning it to this.state,
                                 //whenever the user enters something, we update the this.state.term would be
                                //the value of the input.



    }
    //Defining methods on a class, we must always define a render method
    render() { //This is still a function
        return(
          <div className="search-bar">
              <input
                  value = {this.state.term} //This is a controlled component which has its value set by state.
                  onChange={event => this.onInputChange(event.target.value)}/>
          </div>
        )
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

//State is a javascript object that is used record and react to user events. Each class based object has its own states
//render function would be re-rendered if any changes are made. Constructor function is called is automatically whenever
//a new instance of class is called.


//functional component, some info goes in, some jsx info comes out
/*const SearchBar = () => {
    //User can type text into
    return <input/>;
};
*/

export default SearchBar;