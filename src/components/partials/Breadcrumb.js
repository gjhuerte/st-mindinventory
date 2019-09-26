import React, { Component } from 'react';

class Breadcrumb extends Component {
    state = {  }
    render() { 
        return (
            <nav className="flex flex-start text-sm font-medium">
                <ul className="flex flex-row justify-center items-center">
                    <li className="flex-initial text-gray-700 mr-2">
                        <a
                            className="pr-2" 
                            href="/">
                            PROJECT
                        </a>
                        <span>/</span>
                    </li>
                    <li className="flex-initial flex justify-center items-center text-gray-700 mr-2">
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        <a
                            className="px-2" 
                            href="/">
                            CREATIVE AGENCY
                        </a>
                        <span>/</span>
                    </li>
                    <li className="flex-initial text-white mr-2">
                        <a
                            className="pr-2" 
                            href="/">
                            PIPELINES
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}
 
export default Breadcrumb;