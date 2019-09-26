import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons'; 

class Navigation extends Component {
    state = {}
    render() { 
        return (
            <nav className="flex justify-between items-center bg-gray-900 w-full h-16 border-b-2 border-gray-800">
                <div className="flex-initial p-2">
                    <ul className="flex flex-row text-white ml-5 font-medium">
                        <li className="flex-1 mr-2 text-blue-600">
                            <a href="/">
                                PIPELINES
                            </a>
                        </li>  
                        <li className="flex-1 mr-2">
                            <a href="/">
                                CODES
                            </a>
                        </li>  
                        <li className="flex-1 mr-2">
                            <a href="/">
                                ACTIVITY
                            </a>
                        </li>  
                    </ul>
                </div>
                
                <div className="flex-1 max-w-md">
                    <div className="rounded border flex flex-row border-gray-800">
                        <input 
                            type="text"
                            className="p-2 bg-transparent w-auto flex-1 text-white text-xs"
                            placeholder="Search ie. Projects, Pipelines, Codes" />
                        <button className="flex-initial p-2 text-gray-700">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>

                <div className="flex-initial flex flex-row items-center p-2">
                    <a 
                        className="flex-1 text-white font-bold mr-2"
                        href="/">
                        Account
                    </a>

                    <img 
                        className="rounded-full mr-4 w-10 h-10"
                        alt="Profile"
                        src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                </div>
            </nav>
        );
    }
}
 
export default Navigation;