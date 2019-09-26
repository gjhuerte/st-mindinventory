import React, { Component } from 'react';
import Navigation from './components/partials/Navigation';
import Sidebar from './components/partials/Sidebar';
import Content from './components/templates/Content';

class App extends Component {
  state = {
    showSidebar: false
  };

  handleHideSidebar = () => {
    this.setState({
      showSidebar: ! this.state.showSidebar
    });

  }

  render() { 
    return (
      <React.Profiler
        id="base"
        onRender={() => {}}>
        <div className="flex flex-row">
          <div className="flex-initial">
            <Sidebar show={this.state.showSidebar} />
          </div>
          <div className="flex-initial flex-col w-full">
            <Navigation hideSidebar={this.handleHideSidebar} />
            <Content />
          </div>
        </div>
      </React.Profiler>
    );
  }
}
 
export default App;
