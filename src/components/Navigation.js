import React from 'react';

import { Logo, User } from '../images';

class Navigation extends React.Component {
  render (){
    return(
      <>
        <div className="w-full sm:w-2/3 md:w-2/3 lg:w-2/3">
          <img src={Logo} alt="Logo" className="w-32 mx-auto sm:mr-auto sm:ml-0 sm:pl-2 md:px-4 md:mr-auto md:ml-0 md:w-48 lg:px-4 lg:mr-auto lg:ml-0 cursor-pointer" />
        </div>
        <div className="flex-auto">
          <div className="flex flex-row items-center justify-center space-x-2 md:space-x-4 h-full">
            <form>
              <input className="rounded-full py-2 px-4 w-32 h-8 md:h-10 md:w-42 shadow-sm outline-none focus:shadow-outline focus:bg-green-100" />
            </form>
            <img src={User} alt="Profile" className="h-16 w-16 object-scale-down cursor-pointer" />
          </div>
        </div>
      </>
    );
  }
}

export default Navigation;