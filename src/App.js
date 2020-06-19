import React from 'react';

import Navigation from './Components/Navigation/Navigation';
import Main from './Components/Main/Main';
import Moodbar from './Components/Moodbar/Moodbar';

class App extends React.Component {
  render (){
    return <div>
      <Navigation />
      <Main />
      <Moodbar />
    </div>
  }
}

export default App;