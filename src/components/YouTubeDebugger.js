import React, { Component } from 'react';

class YouTubeDebugger extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
                
                }
            }
         };



         handleClick = () => {
            this.setState({
                settings: {
                    bitrate: 12,
                    video: {
                        resolution: this.state.settings.video.resolution
                    }
            }})
        }

        handleThing = () => {
            this.setState({
                settings: {
                    bitrate: this.state.settings.bitrate,
                    video: {
                        resolution: '720p'
                    }
                }
            })
        }

  
    render() {
        // debugger
      return (
          <div>
            <button className='bitrate' onClick={this.handleClick} > {this.state.settings.bitrate} </button>
            <button className='resolution' onClick={this.handleThing} > {this.state.settings.video.resolution} </button>
        </div>
          );
    }
  }

export default YouTubeDebugger