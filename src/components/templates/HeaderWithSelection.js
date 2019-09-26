import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTh,
    faList,
} from '@fortawesome/free-solid-svg-icons';

class HeaderWithSelection extends Component {
    state = {  }
    render() { 
        return (
            <div className="flex flex-row justify-between items-center my-5">
                <div className="flex-initial flex flex-col">
                    <h1 className="text-white text-5xl font-semibold">
                        Add New Action
                    </h1>
                    <div className="text-sm">
                        <span className="text-gray-600">to </span>
                        <a
                            className="text-blue-500" 
                            href="/">
                            Creative Agency
                        </a>
                    </div>
                </div>

                <div className="flex-initial flex flex-row items-center justify-center md:pr-10">
                    <ul className="flex flex-row font-bold text-xl">
                        <li className="text-blue-500 mx-3">
                            <a href="/">
                                <FontAwesomeIcon icon={faTh} />
                            </a>
                        </li>
                        <li className="text-white mx-3">
                            <a href="/">
                                <FontAwesomeIcon icon={faList} />
                            </a>
                        </li>
                    </ul>

                    <button
                        type="button"
                        className="py-4 px-16 ml-5 text-xs bg-blue-600 text-white rounded-lg focus:outline-none focus:shadow-outline">
                        Bulk Select
                    </button>
                </div>
            </div>
        );
    }
}
 
export default HeaderWithSelection;