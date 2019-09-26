import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faEllipsisV, 
    faPen, 
    faCog, 
    faTrash,
    faClock,
} from '@fortawesome/free-solid-svg-icons';

class CurrentTask extends Component {
    state = {}
    render() { 
        return (
            <div className="flex-initial border rounded-lg border-gray-700 px-5 pt-5 pb-1 m-2 w-full md:w-1/2">
                <div className="flex flex-row border-b border-gray-700 pb-5 justify-between items-center text-white">
                    <h3 className="flex-1">
                        Current Task - 2
                    </h3>
                    <ul className="flex-1 flex flex-row justify-end items-center">
                        <li className="mr-5">
                            <a href="/">
                                <FontAwesomeIcon icon={faPen} />
                            </a>
                        </li>
                        <li className="mr-5">
                            <a href="/">
                                <FontAwesomeIcon icon={faCog} />
                            </a>
                        </li>
                        <li className="mr-5">
                            <a href="/">
                                <FontAwesomeIcon icon={faEllipsisV} />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="pt-5">
                    <div className="flex flex-row justify-between items-center text-white">
                        <h3 className="text-md font-bold">Task List</h3>
                        <button className="py-3 px-5 bg-blue-600 text-sm rounded-lg">
                            NEW TASK
                        </button>
                    </div>

                    <div className="flex flex-col bg-blue-600 rounded-lg p-5 my-5">
                        <div className="flex-initial flex flex-row justify-between text-white mb-3">
                            <div className="flex-initial">
                                <h3 className="text-md font-medium">Product Page Redesign</h3>
                                <h6 className="text-xs text-blue-400 font-medium">High Priority</h6>
                            </div>

                            <ul className="flex-initial flex flex-row items-center">
                                <li className="mx-2">
                                    <a href="/">
                                        <FontAwesomeIcon icon={faPen} />
                                    </a>
                                </li>
                                <div className="mx-2 opacity-75 text-gray-400">|</div>
                                <li className="mx-2">
                                    <a href="/">
                                        <FontAwesomeIcon icon={faTrash} />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="flex-initial flex flex-row justify-between text-white my-3">
                            <div className="flex-initial flex flex-row justify-between items-center">
                                <img
                                    className="content-cover h-10 w-10 rounded-full mr-3" 
                                    alt="Profile"
                                    src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />

                                <h6 className="text-sm">James Donluck</h6>
                            </div>
                            <div className="flex flex-row justify-between items-center text-blue-400">
                                <FontAwesomeIcon className="mr-2" icon={faClock} />

                                <h6>29 September 2019</h6>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col rounded-lg p-5">
                        <div className="flex-initial flex flex-row justify-between text-white mb-2">
                            <div className="flex-initial">
                                <h3 className="text-md font-medium">Testing module - Checkout</h3>
                                <h6 className="text-xs text-gray-700 font-medium">Low Priority</h6>
                            </div>

                            <ul className="flex-initial flex flex-row items-center"></ul>
                        </div>

                        <div className="flex-initial flex flex-row justify-between text-white">
                            <div className="flex-initial flex flex-row justify-between items-center">
                                <img
                                    className="content-cover h-10 w-10 rounded-full mr-3" 
                                    alt="Profile"
                                    src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />

                                <h6 className="text-sm">Alan Anrich</h6>
                            </div>
                            <div className="flex flex-row justify-between items-center text-gray-700">
                                <FontAwesomeIcon className="mr-2" icon={faClock} />

                                <h6>29 September 2019</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CurrentTask;