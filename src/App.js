import React from 'react';
import Navigation from './components/partials/Navigation';
import Sidebar from './components/partials/Sidebar';
import Content from './components/templates/Content';

function App() {
  return (
    <React.Profiler
      id="base"
      onRender={() => {}}>
      <div className="flex flex-row">
        <div className="flex-initial">
          <Sidebar />
        </div>
        <div className="flex-initial flex-col w-full">
          <Navigation />
          <Content />
        </div>
      </div>
    </React.Profiler>
  );
}

export default App;
