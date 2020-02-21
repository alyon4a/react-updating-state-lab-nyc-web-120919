import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
            resolution: '1080p'
            }
        }
    }
    render() {
        return (<div>
                    <button onClick={this.handleBitrateClick} className='bitrate'>{this.state.settings.bitrate}</button>
                    <button onClick={this.handleResolutionClick} className='resolution'>{this.state.settings.video.resolution}</button>
                </div>);
    }

    handleBitrateClick = () => {
        this.setState({settings: {
            ...this.state.settings,    
            bitrate: 12}
          });
    }

    handleResolutionClick = () => {
        this.setState({settings: {
            ...this.state.settings,    
            video: {
                resolution: '720p'
            }}
        });
    }
}
