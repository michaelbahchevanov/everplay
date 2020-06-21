import React from 'react';

import { Main, Moodbar } from './components';

class App extends React.Component {
  render (){
    return(
      <React.Fragment>
        <main className="flex flex-wrap items-center bg-gray-900">
          <Main />
        </main>
        <div className="flex mb-2">
          <Moodbar />
        </div>
      </React.Fragment>
    );
  }
}

export default App;