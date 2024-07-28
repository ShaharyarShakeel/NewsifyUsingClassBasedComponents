import React, { useState } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


export default function App() {
  const apiKey = "d5409d358c1b49d8bba2b4607353bbbe";
  const [progress, setProgress] = useState(0);
  const mySetProgress = (progress)=> {
    setProgress(progress);
  }
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News mySetProgress =  {mySetProgress} apiKey = {apiKey} key='general' pageSize={15} country='in' category='general' />}></Route>
            <Route exact path="/business" element={<News mySetProgress =  {mySetProgress} apiKey = {apiKey} key='business' pageSize={15} country='in' category='business' />}></Route>
            <Route exact path="/entertainment" element={<News mySetProgress =  {mySetProgress} apiKey = {apiKey} key='entertainment' pageSize={15} country='in' category='entertainment' />}></Route>
            <Route exact path="/general" element={<News mySetProgress =  {mySetProgress} apiKey = {apiKey} key='general' pageSize={15} country='in' category='general' />}></Route>
            <Route exact path="/health" element={<News mySetProgress =  {mySetProgress} apiKey = {apiKey} key='health' pageSize={15} country='in' category='health' />}></Route>
            <Route exact path="/science" element={<News mySetProgress =  {mySetProgress} apiKey = {apiKey} key='science' pageSize={15} country='in' category='science' />}></Route>
            <Route exact path="/sports" element={<News mySetProgress =  {mySetProgress} apiKey = {apiKey} key='sports' pageSize={15} country='in' category='sports' />}></Route>
            <Route exact path="/technology" element={<News mySetProgress =  {mySetProgress} apiKey = {apiKey} key='technology' pageSize={15} country='in' category='technology' />}></Route>
          </Routes>
        </Router>
      </div>
    )
}
