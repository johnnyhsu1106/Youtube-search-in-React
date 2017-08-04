import _ from 'lodash'; //
import React, {Component} from 'react';
// import React.Component from 'react';
// const Component = React.Component;  the two lines is equal to import {Component} from 'react';
import ReactDOM from 'react-dom';
import YouTubeSearch from 'youtube-api-search';

// the components contained in the app component
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';



const API_KEY = 'AIzaSyCpTE0JHzXs9-I0CJWt8UGAo25TNprJunM';

// Create a new component , This component should produce some html
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }; // usethe App.state to storage the search result of youtube video.
        this.videoSearch('wonder woman') // default search item
    }

    videoSearch(term){
        YouTubeSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 800);

        return (
            <div className="row">
                <SearchBar onSearchTermChange={videoSearch}  />
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                           videos={this.state.videos}/>
            </div>
        )
    }}


ReactDOM.render(<App />, document.querySelector('.container'));
