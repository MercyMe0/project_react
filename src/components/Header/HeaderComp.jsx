import React, { Component } from 'react'
// import React from 'react'
import {Link} from "react-router-dom";

import "./Header.css"
// import {require} from 'browserify'
import "./login2.png" 
import "./rent.png"
import "./aboutUs.png"
import "./choose.png"
import "./Feedback.png"
export default class HeaderComp extends Component {
  render() {
    return (
      <div className="container">
        {/* <img src="./rent.png" alt="rent"/> */}
        
        {/* <a href="https://www.flaticon.com/ru/free-icons/" title="аренда иконки">Аренда иконки от Freepik - Flaticon</a> */} 
        {/* <p>Выбрать хатку </p> */}
        {/* <p>Отзывы </p>
        <p>О нас </p>
        <p>Авторизоваться </p> */}
        {/* <img src="login2.png" alt="login" className="loginPhoto"/> */}
        
        
        <img src={require('./rent.png')} alt="rent" className="rentPhoto" width="45px" height="39px" />
        <div ><Link  style={{color: "White",textDecoration: "none"}} to ="/main">Выбрать жильё</Link><img src={require('./choose.png')} alt="choose" className="choosePhoto" width="30px" height="30px" /></div>
        {/* <div ><Link style={{color: "White",textDecoration: "none"}} to ="/aboutUs">О нас</Link><img src={require('./aboutUs.png')} alt="aboutUs" className="aboutPhoto" width="30px" height="30px" /></div> */}
        {/* не успеваю сделать aboutUs :D */}
        <div   ><Link style={{color: "White",textDecoration: "none"}} to ="/feedback">Отзывы</Link><img src={require('./Feedback.png')} alt="feedback" className="feedbackPhoto" width="30px" height="30px" /></div>
        <div ><Link  style={{color: "White",textDecoration: "none"}} to ="/authorization">Авторизоваться</Link><img src={require('./login2.png')} alt="login" className="authPhoto" width="30px" height="30px"/></div>
        <div ><Link  style={{color: "White",textDecoration: "none"}} to ="/chat">Чат</Link><img src={require('./chat.png')} alt="chat" className="chatPhoto" width="30px" height="30px"/></div>
        <div ><Link  style={{color: "White",textDecoration: "none"}} to ="/weather">Посмотреть погоду</Link><img src={require('./weather.png')} alt="weather" className="WeatherPhoto" width="30px" height="30px"/></div>
        {/* <img src={require('./login2.png')} alt="login" className="loginPhoto" width="35px" height="35px"/> */}
        <img src={require('./rent.png')} alt="rent" className="rentPhoto" width="45px" height="39px" />
        {/* <img src={require('./')} alt="" className="" width="px" height="px" /> */}
        {/* переход на другой сайт : */}
        {/* <a href="http://localhost:3000/main" target="_blank" rel="noreferrer">
        <img
          src={require('./choose.png')}
          alt="choose"
        />
      </a> */}

      </div>
    )
  }
}


