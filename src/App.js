// src/App.js
import React, { useState } from 'react';
import './App.css';
import hogs from './porker_data';
import Nav from './components/Nav';
import HogContainer from './components/HogContainer';
import FilterSortBar from './components/FilterSortBar';
import AddHogForm from './components/AddHogForm';

function App() {
  const [hogData, setHogData] = useState(hogs);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [hiddenHogs, setHiddenHogs] = useState([]);

  // Function to hide a hog
  const hideHog = (hogName) => {
    setHiddenHogs([...hiddenHogs, hogName]);
  };

  // Function to add a new hog
  const addHog = (newHog) => {
    setHogData([...hogData, newHog]);
  };

  // Apply filter and sort, excluding hidden hogs
  const getDisplayedHogs = () => {
    let displayedHogs = [...hogData];

    // Exclude hidden hogs
    if (hiddenHogs.length > 0) {
      displayedHogs = displayedHogs.filter((hog) => !hiddenHogs.includes(hog.name));
    }

    // Filter greased hogs
    if (showGreasedOnly) {
      displayedHogs = displayedHogs.filter((hog) => hog.greased);
    }

    // Sort hogs
    if (sortBy === 'name') {
      displayedHogs.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'weight') {
      displayedHogs.sort((a, b) => a.weight - b.weight);
    }

    return displayedHogs;
  };

  return (
    <div className="App">
      <Nav />
      <FilterSortBar
        showGreasedOnly={showGreasedOnly}
        setShowGreasedOnly={setShowGreasedOnly}
        setSortBy={setSortBy}
      />
      <HogContainer hogs={getDisplayedHogs()} hideHog={hideHog} />
      <AddHogForm addHog={addHog} />
    </div>
  );
}

export default App;

