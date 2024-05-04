
import './App.css';
import CountryList from './components/CountryList';
import Filter from './components/Filter';
import React, { useState, useEffect } from 'react';
import { User,CountryUsers } from './utils/types';
import {groupUsersByCountry,getData} from './utils';

function App() {
  const [genderFilter, setGenderFilter] = useState<string>('All');

  return (
    <div className="App">
      <h1>Countries</h1>
      <Filter genderFilter={genderFilter} setGenderFilter={setGenderFilter} />
      <CountryList genderFilter={genderFilter} />
    </div>
  );
}

export default App;
