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
    state = {
        show: false,
    };

    handleShowSidebar = () => {
        console.log(this.props.show);
        if (this.props.show) {
            return 'ml-0 w-20'
        }

        return '-ml-64';
    }

    render() { 
        return (
            <section
                id="sidebar"
                className={this.handleShowSidebar() + " absolute z-50 bg-gray-800 min-h-full md:ml-0 md:relative md:z-0 md:w-auto md:flex-1 md:border-gray-800 md:border-r-2"}>
                <div className="flex-initial flex flex-row justify-center items-center border-b-2 border-gray-700 p-2 h-16">
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