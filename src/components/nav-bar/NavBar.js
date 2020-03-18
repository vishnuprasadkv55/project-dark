import React from 'react';

function NavBar() {
    return (

        <nav className="shadow-lg h-20 mb-224px w-full flex items-center fixed justify-between flex-wrap bg-black ">
            <div className="pl-4 flex items-center flex-shrink-0 text-white mr-6">
                <img className="h-6 pr-6" src="https://raw.githubusercontent.com/vishnuprasadkv55/project-dark/master/src/assets/Slices/Back.png" alt="" />
                <span className="tracking-tight">Romantic Comedy</span>
            </div>
        </nav>
    );
}

export default NavBar;