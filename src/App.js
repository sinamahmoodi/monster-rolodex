import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import Searchbox from './components/search-box/serach-box.component';
import './App.css';
import React from 'react';


class App extends Component {
  constructor() {
    super();

    this.state = {
     monsters: [],
     searchfield: '',
   };
  }

  componentDidMount() {
     fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => 
    this.setState(
      () => {
      return {monsters: users };
    },

    ));
  }

  
  onsearchchange = (event) => {
    console.log(event.target.value);
   const searchfield= event.target.value.toLocaleLowerCase();
   this.setState(() => {
      return {searchfield }; 
    })}


  render() {
    const{ monsters, searchfield}=this.state;
    const {onsearchchange} = this;
    const filteredMonster = monsters.filter((monsters) => {
      return monsters.name.toLocaleLowerCase().includes(searchfield);
     });

    return (
      <div className="App">
        <h1 className='app-title'>Monster Rolodex</h1>
        <Searchbox
        className='monsters-search-box'
         onChangeHandler={onsearchchange} 
         placeholder='search monsters'
         />
        <CardList monsters={filteredMonster}/>
      </div>
    );
      }
    }
export default App;
