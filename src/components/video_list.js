import React from 'react';
import VideoListItem from './video_list_item'

const VideoList = (props) => {
    //map is a built in function that automatically calls each number in the array
   const videoItems = props.videos.map((video) => {
        return(
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key = {video.etag}
                video={video}/>
            );
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>

    );
};

export default VideoList;


//In a class based component props are available everywhere in any method we define as this.props
//render(this.props)
