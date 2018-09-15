import React, { Component } from 'react';
import './App.css';
import Cardlist from './Cardlist/Cardlist';
import Header from '../components/Header/Header';
import Searchbox from '../components/Searchbox/Searchbox';
import Scroll from '../components/Scroll/Scroll';

class App extends Component {
    state = {
      robots: [],
      searchfield: ''
    }

   searchHandler = (e) => {
    this.setState({ searchfield: e.target.value })
  }

  componentDidMount(){
     fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({robots:users}))
  }

  render() {
      const { robots, searchfield } = this.state;
      const filteredRobots = robots.filter(robot => 
         robot.name.toLowerCase().includes(searchfield.toLowerCase())
    )

    console.log(this.name)
      if (robots.length === 0){
        return <h1 className="f-headline tc pt5">Loading...</h1>
      } 
      return (
        <div>
          <Header />
          <Searchbox searchChange={this.searchHandler}/>
          <Scroll>
            <Cardlist robots={filteredRobots} searchMe={this.searchgield}/>
          </Scroll>
        </div>
      );

  }
}

export default App;
