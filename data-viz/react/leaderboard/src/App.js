/* completed with help from this awesome tutorial by Dylan Israel: https://www.youtube.com/watch?v=D8KE3hZEYTk&t=180s */
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Table from 'react-bootstrap/lib/Table';
import Image from 'react-bootstrap/lib/Image';
import 'font-awesome/css/font-awesome.css';

class App extends Component {

state = {
  top100Days: [],
  top100AllTime: [],
  current: true
}

// get data
  getFCCData(url, stateName) {
    axios.get(url)
      .then(({ data }) => {
        this.setState({ [stateName]: data });
        console.log(this.state.top100Days);
      })
  }

  pointChange(value) {
    if(this.state.current !== value) {
      this.setState({current: value})
    }
  }

  componentDidMount() {
    this.getFCCData('https://fcctop100.herokuapp.com/api/fccusers/top/recent', "top100Days");
    this.getFCCData('https://fcctop100.herokuapp.com/api/fccusers/top/alltime', "top100AllTime");
  }

  

  render() {
    const {top100Days, top100AllTime, current} = this.state
    return (
      <div className="App container">
      <div class="page-header"><h3>Leaderboard</h3></div>
    <Table striped bordered condensed className="colorBlack">
    
  <thead>
      <tr>
        <th>#</th>
        <th>Camper Name</th>
        <th onClick={(event)=>this.pointChange(true)}>Last 30 Days {current && (<i className="fa fa-caret-left"></i>)} </th>
        <th onClick={(event)=>this.pointChange(false)}>All Time {current === false && (<i className="fa fa-caret-left"></i>)} </th>
      </tr>
  </thead>
  <tbody>
      {current && (top100Days.map((row, index) => (
    <tr key={row.username}>
      <td>{index+1}</td>
      <td><a href={`https://www.freecodecamp.org/${row.username}`}>
      <Image src={row.img} className="imgHeight" /> {row.username} </a></td>
      <td>{row.recent}</td>
      <td>{row.alltime}</td>
    </tr>
      )
      ))}
          {current === false && (top100AllTime.map((row, index) => (
    <tr key={row.username}>
      <td>{index+1}</td>
      <td><a href={`https://www.freecodecamp.org/${row.username}`}>
      <Image src={row.img} className="imgHeight" /> {row.username} </a></td>
      <td>{row.recent}</td>
      <td>{row.alltime}</td>
    </tr>
      )
      ))}
  </tbody>
    </Table>
      </div>
    );
  }
}

export default App;
