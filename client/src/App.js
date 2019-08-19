import React, { useState } from 'react';
import {BrowserRouter as Router,Route} from 'react-router'}
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
  

      <SavedList list={savedList} />
    <Route exact path ="/" component ={MovieList}/>
    <Route path = "/movies/{id}/"/>
    </div>
  );
};

export default App;
