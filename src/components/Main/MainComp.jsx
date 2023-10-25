import React, { Component } from 'react'
import "./Main.css"

import "./Sovets.jpg"
import "./trains.jpg"
import "./Artems.jpg"
import "./here.jpg"


export default class MainComp extends Component {
  render() {
    return (
      <div className="container2">
        <div className="mainH">
          <h1 classname="mainH1">На выбор у вас есть 4 квартиры в городе Ессентуки</h1>
        </div>

        <div className="mainPhotos">

          <div className="herePhoto">
            <img src={require('./here.jpg')} alt="here" className="herePhoto" />
          </div>

          <div className="trainsPhoto">
            <img src={require('./trains.png')} alt="trains" className="trainsPhoto" />
          </div>
          <div className="artemsPhoto">
            <img src={require('./Artems.jpg')} alt="artems" className="artemsPhoto" />
          </div>

          <div className="sovetsPhoto">
            <img src={require('./Sovets.jpg')} alt="sovets" className="sovetsPhoto" />
          </div>
        </div>
      </div>
    )
  }
}
