import React from 'react';

import { Main, Moodbar } from './components';

class App extends React.Component {
  render (){
    return(
      <>
        <main className="flex flex-wrap items-center mt-2 bg-gray-500">
          <Main />
        </main>
        <div className="flex space-x-10 bg-black">
          <Moodbar />
        </div>
      </>
    );
  }
}

export default App;