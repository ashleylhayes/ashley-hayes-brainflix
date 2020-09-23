import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';import Header from './components/Header/Header';
import CurrentVideo from './components/CurrentVideo/CurrentVideo'
import VideoUpload from './components/VideoUpload/VideoUpload';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CurrentVideo} />
          <Route path="/videoupload" component={VideoUpload} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
