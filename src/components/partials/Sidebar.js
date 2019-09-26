import React, { Component } from 'react';
import logo from '../../logo.svg';
import {
    faInbox,
    faBell,
    faStickyNote,
    faCogs,
    faUser,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Sidebar extends Component {
    state = {}
    render() { 
        return (
            <section
                id="sidebar"
                className="bg-gray-900 min-h-full flex-1 border-gray-800 border-r-2">
                <div className="flex-initial flex flex-row justify-center items-center border-b-2 border-gray-800 p-2 h-16">
                    <img src={logo} alt="Brand" className="w-10" />
                    <span className="text-white"></span>
                </div>

                <div className="flex-initial flex flex-row justify-center items-center h-16">
                    <a 
                        className="text-blue-600"
                        href="/">
                        <FontAwesomeIcon icon={faInbox} />
                    </a>
                </div>
                
                <div className="flex-initial flex flex-row justify-center items-center h-16">
                    <a 
                        className="text-white"
                        href="/">
                        <FontAwesomeIcon icon={faBell} />
                    </a>
                </div>

                <div className="flex-initial flex flex-row justify-center items-center h-16">
                    <a 
                        className="text-white"
                        href="/">
                        <FontAwesomeIcon icon={faStickyNote} />
                    </a>
                </div>

                <div className="flex-initial flex flex-row justify-center items-center h-16">
                    <a 
                        className="text-white"
                        href="/">
                        <FontAwesomeIcon icon={faCogs} />
                    </a>
                </div>

                <div className="flex-initial flex flex-row justify-center items-center h-16">
                    <a 
                        className="text-white"
                        href="/">
                        <FontAwesomeIcon icon={faUser} />
                    </a>
                </div>

                <div className="flex-initial flex flex-row justify-center items-center h-16">
                    <a 
                        className="text-white"
                        href="/">
                        <FontAwesomeIcon icon={faSignOutAlt} />
                    </a>
                </div>
            </section>
        );
    }
}
 
export default Sidebar;