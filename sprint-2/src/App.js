import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CurrentVideo from './components/CurrentVideo/CurrentVideo'
import VideoUpload from './components/VideoUpload/VideoUpload';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={CurrentVideo} />
          <Route path="/videoupload" component={VideoUpload} />
          <Route path="/:id" component={CurrentVideo} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
