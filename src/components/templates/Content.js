import React, { Component } from 'react';
import Breadcrumb from '../partials/Breadcrumb';
import HeaderWithSelection from './HeaderWithSelection';
import Suggestions from './Suggestions';
import CurrentTask from './CurrentTask';
import Chart from './Chart';

class Content extends Component {
    state = {  }
    render() { 
        return (
            <section
                className="bg-gray-900 min-h-screen flex-initial w-full p-3"
                id="content">
                <Breadcrumb />
                <HeaderWithSelection />
                <Suggestions />
                <div className="flex flex-col md:flex-row">
                    <CurrentTask />
                    <Chart />
                </div>
            </section>
        );
    }
}
 
export default Content;