import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faSearch, 
    faBars, 
    faTimes, 
    faEllipsisV 
} from '@fortawesome/free-solid-svg-icons'; 
import logo from '../../logo.svg';

class Navigation extends Component {
    state = {
        show: false,
    };

    handleShowNavigation = () => {
        this.setState({
            show: ! this.state.show,
        });
    }

    renderHiddenItemsOnMobile() {
        console.log(this.state.show);
        if (this.state.show) {
            return 'visible';
        }

        return 'hidden';
    }

    renderHiddenOnShownNavigation () {
        if (this.state.show) {
            return 'hidden';
        }

        return 'visible';
    }

    render() { 
        return (
            <nav className="flex-col flex md:flex-row justify-between items-center bg-gray-900 w-full md:h-16 border-b-2 border-gray-800">
                <div className="w-full flex flex-row justify-center items-center visible m-5 md:hidden">
                    <button 
                        onClick={this.props.hideSidebar}
                        className="flex-1 bg-transparent text-white mx-5 focus:outline-none">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <div className="flex-initial flex flex-row justify-center items-center">
                        <img src={logo} alt="Brand" className="w-10" />
                        <span className="text-white"></span>
                    </div>
                    <button 
                        onClick={this.handleShowNavigation}
                        className={this.renderHiddenOnShownNavigation() + " flex-1 bg-transparent text-white mx-5 focus:outline-none"}>
                        <FontAwesomeIcon icon={faEllipsisV} />
                    </button>
                    <button 
                        onClick={this.handleShowNavigation}
                        className={this.renderHiddenItemsOnMobile() + " flex-1 bg-transparent text-white mx-5 focus:outline-none"}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                </div>

                <div className={this.renderHiddenItemsOnMobile() + " md:visible md:flex md:flex-initial my-5 md:my-0 p-2"}>
                    <ul className="flex flex-col md:flex-row text-white ml-5 font-medium">
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
                
                <div className={this.renderHiddenItemsOnMobile() + " md:visible md:flex md:flex-initial my-2 md:my-0 max-w-md"}>
                    <div className="rounded border flex flex-row border-gray-800">
                        <input 
                            type="text"
                            className="p-2 bg-transparent w-64 max-w-64 text-white text-xs"
                            placeholder="Search ie. Projects, Pipelines, Codes" />
                        <button className="flex-initial p-2 text-gray-700">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>

                <div className={this.renderHiddenItemsOnMobile() + " md:visible md:flex md:flex-initial mb-5 md:mb-0 flex-col md:flex-row justify-center items-center p-2"}>
                    <a 
                        className="flex-1 text-white font-bold mr-2 my-5 md:my-0"
                        href="/">
                        Account
                    </a>

                    <img 
                        className="hidden md:block rounded-full md:mr-4 w-10 h-10"
                        alt="Profile"
                        src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                </div>
            </nav>
        );
    }
}
 
export default Navigation;