import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default class App extends Component {
  apiKey = process.env.REACT_APP_API_KEY;
  state ={
    progress: 0
  }

  setProgress = (progress)=> {
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path="/" element={<News setProgress =  {this.setProgress} apiKey = {this.apiKey} key='general' pageSize={15} country='in' category='general' />}></Route>
            <Route exact path="/business" element={<News setProgress =  {this.setProgress} apiKey = {this.apiKey} key='business' pageSize={15} country='in' category='business' />}></Route>
            <Route exact path="/entertainment" element={<News setProgress =  {this.setProgress} apiKey = {this.apiKey} key='entertainment' pageSize={15} country='in' category='entertainment' />}></Route>
            <Route exact path="/general" element={<News setProgress =  {this.setProgress} apiKey = {this.apiKey} key='general' pageSize={15} country='in' category='general' />}></Route>
            <Route exact path="/health" element={<News setProgress =  {this.setProgress} apiKey = {this.apiKey} key='health' pageSize={15} country='in' category='health' />}></Route>
            <Route exact path="/science" element={<News setProgress =  {this.setProgress} apiKey = {this.apiKey} key='science' pageSize={15} country='in' category='science' />}></Route>
            <Route exact path="/sports" element={<News setProgress =  {this.setProgress} apiKey = {this.apiKey} key='sports' pageSize={15} country='in' category='sports' />}></Route>
            <Route exact path="/technology" element={<News setProgress =  {this.setProgress} apiKey = {this.apiKey} key='technology' pageSize={15} country='in' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
