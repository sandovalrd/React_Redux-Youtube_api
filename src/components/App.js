import React from 'react';
import SearchBar from './SearchBar'
import youtobe from '../api/youtobe';
import VideosList from './VideosList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state={videos:[], selectVideo:null};
    onTermSumit = async term =>{
        const response = await youtobe.get('/search',{
            params: {
                q: term
            }
        });
        
        this.setState({
            videos:response.data.items,
            selectVideo: response.data.items[0]
        });
    }

    componentDidMount(){
        this.onTermSumit('');
    }

    onVideoSelect = video => {
        this.setState({selectVideo:video})
    }

    render(){
        return (
            <div className='ui container' style={{marginTop:"10px"}}>
                <SearchBar onFormSumit={this.onTermSumit}  />
                <div className='ui grid'>
                    <div className='ui row'>
                        <div className='eleven wide column'>
                            <VideoDetail video={this.state.selectVideo}/>
                        </div>
                        <div className='five wide column'>
                            <VideosList 
                                videos={this.state.videos}
                                onVideoSelect={this.onVideoSelect}  
                                />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;