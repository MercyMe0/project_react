import logo from './logo.svg';
import './App.css';
import BodyComp from './components/Body/BodyComp';
import FooterComp from './components/Footer/FooterComp';
import HeaderComp from './components/Header/HeaderComp';
import MainComp from './components/Main/MainComp';
import FeedbackComp from './components/Feedback/FeedbackComp';
// import HTMLtest from './components/CssTests/HTMLtest';
import {Routes,Route} from 'react-router-dom';





import AboutUsComp from './components/AboutUsComp/AboutUsComp';
import Userfront, { SignupForm } from "@userfront/toolkit/react";
import WeatherComp from './components/WeatherForecast/WeatherComp';
import AuthorizationComp from './components/authotizationComp/AuthorizationComp';
import Chat from './components/ChatComp/Chat';






Userfront.init("demo1234");



function App() {
  
  return (
    <>
    <div className="AppWrapper">

      
      {/* <BodyComp/> */}
      <HeaderComp/>
      {/* <BodyComp/> */}
      {/* <FooterComp/> */}
      {/* <HTMLtest/> */}
    <Routes className="RoutesApp">
      <Route path="/main" element={ <MainComp/> }/>
      <Route path="/feedback" element={ <FeedbackComp/> }/>
      <Route path="/authorization" element={ <AuthorizationComp/>}/>
      <Route path="/aboutUs" element={ <AboutUsComp/>}/>
      <Route path="/weather" element={ <WeatherComp/>}/>
      <Route path="/chat" element={ <Chat/>}/>

      {/* <h1>Это сайт аренды квартир.</h1> */}

  {/* <Route path="/films" element={ <Films/> }/> */}
    </Routes >  
    <div className="AppDiv">
      <h3>Приветствую! Здесь ты можешь выбрать квартиру для аренды в городе Ессентуки. На выбор есть 4 квартиры. Есть отзывы клиентов. Чтобы воспользоваться чатом необходимо авторизоваться, а так-же можно посмотреть погоду , чтобы выйти гулять тогда, когда это будет тебе нравится. </h3>
    </div>
    </div>
    </>
  );

}





export default App;
