import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import HomeTab from './HomeTab';
import Navigation from './Navigation';
import Board from './Board';
import './App.css';

const App = () => {
  const [selectedTab, setSelectedTab] = useState('home'); // Correctly placed inside the component

  // Function to render the Board component
  const renderShippingRequests = () => {
    return <Board />;
  };

  // Function to render the Navigation component
  const renderNavigation = () => {
    return (
      <Navigation
        onClick={(tabName) => changeTab(tabName)}
        selectedTab={selectedTab}
      />
    );
  };

  // Function to render the tab content based on the selected tab
  const renderTabContent = () => {
    switch (selectedTab) {
      case 'home':
      default:
        return <HomeTab />;
      case 'shipping-requests':
        return renderShippingRequests();
    }
  };

  // Function to change the selected tab
  const changeTab = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div className="App">
      {renderNavigation()}

      <div className="App-body">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default App;
