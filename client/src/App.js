import React, { useState } from 'react';
import {Route} from 'react-router'

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
  <Route path="/movie/{id}" component="/movie/{id.movie}"/>
  <Route exact path ="/" component ={MovieList}/>
      <SavedList list={savedList} />
  

    </div>
  );
};

export default App;
