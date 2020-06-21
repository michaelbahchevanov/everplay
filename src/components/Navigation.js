import React from 'react';

import { Logo, User } from '../images';

class Navigation extends React.Component {
  render (){
    return(
      <React.Fragment>
        <div className="w-full sm:w-full md:w-2/3 lg:w-2/3 h-20">
          <img src={Logo} alt="Logo" className="w-48 mx-auto sm:mx-auto md:px-4 md:mr-auto md:ml-0 lg:px-4 lg:mr-auto lg:ml-0 cursor-pointer" />
        </div>
        <div className="flex-auto">
          <div className="flex flex-row items-center justify-center space-x-4 h-full">
            <form>
              <input className="rounded-full py-2 px-4 w-32 h-8 shadow-sm outline-none focus:shadow-outline focus:bg-green-100" />
            </form>
            <img src={User} alt="Profile" className="h-12 w-12 object-scale-down" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navigation;