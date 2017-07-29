//Connect react to connect with this component
import _ from 'lodash';
import React, { Component } from 'react'; //Go find the library called react and assign it to React
import ReactDom from 'react-dom'; //interact with the actual DOM
//To render a component to the Dom we use ReactDom
import YTSearch from 'youtube-api-search' //Importing the packet from API search
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
//Whenever we are working with our own file, we have to write the path

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDzw3gaCdZGaD9Q3iGi8ADTd5yYJgiVIGA';



//When we are making a component we are writing javascript

//Create a new component. This component should produce some HTML

//const is an ES 2016 syntax: const is declaring a variable, this is the final
// variable of the variable (constant)

//App componet is a class based component
class App extends Component {
    //Runs the constructor function with an empty array
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        }; //List of video is an empty array

        //Does the search and updates with the list of new videos
       this.videoSearch('surfboards');
    }
    //This method takes a search term which is a string and the method is passed onto
    //the searchbar by calling onSearchTermChange
    videoSearch(term) {
        YTSearch({key: API_KEY, term : term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo:videos[0] //First video in the list
            });  //Whenever we have key and value we can condesne it
        });
    }
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)

        return  (
            <div>
            <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
        </div>
        );
    }//Constant called App and assigning it to a function()

}


//Making an instance of App

//Take this component's HTML and put in on the page(on the DOM)
ReactDom.render(<App/>, document.querySelector('.container')); //React is not defined

//To make an instance of a component:
//<App/>


//ERROR:Target container is not a DOM element


//Javascript module is sepereted from all the other code that we write

