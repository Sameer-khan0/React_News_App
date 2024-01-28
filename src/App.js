import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/news';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import About from './components/about';
import Error from './components/Error';
import Healthnews from'./components/healthnews'
import Businessnews from './components/businessnews'
import Sportnews from './components/sportnews'
import Enternews from './components/Enternews'
import Sciencenews from './components/Sciencenews' 
import LoadingBar from 'react-top-loading-bar';

export class App extends Component {
  state={
     progress: 0
  }

setProgress=(progress)=>{
this.setState({progress:progress})
}

  render() {
    return (
      <div>
        <Router>
        < Navbar />
        <LoadingBar
        height={6}
        color='#2a90fe'
        progress={this.state.progress}
        onLoaderFinished={() => this.setProgress(0)}
      />
        <Routes>
          <Route path='about'  element={<About settopbar={this.setProgress} />  }/>
          <Route path='/' key="general" index element={<News settopbar={this.setProgress} category='general' ntitile='General' />} />
          <Route path='/business' key="business" element={<Businessnews settopbar={this.setProgress} category='business' />} />
          <Route path='/health' key="health" element={<Healthnews settopbar={this.setProgress} category='health' />} />
          <Route path='/sports' key="sports" element={<Sportnews settopbar={this.setProgress} category='sports' />} />
          <Route path='/entertainment' key="entertainment" element={<Enternews settopbar={this.setProgress} category='entertainment' />} />
          <Route path='/science' key="science" element={<Sciencenews settopbar={this.setProgress} category='science' />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
        </Router>
    </div>
    )
  }
}

export default App;