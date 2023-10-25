// import React from 'react';
// import { useState } from 'react';

// import "./WeatherComp.css"

// export default function Weather() {
//   const api = {
//     key: 'c7616da4b68205c2f3ae73df2c31d177',
//     base: 'http://api.openweathermap.org/data/2.5/'
//   }

//   const [city, setCity] = useState('');


// const [weather, setWeather] = useState({});



// const search = evt => {
//   if (evt.key === 'Enter') {
//     fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`) 
//       .then(res => res.json())  
//       .then(result => {         
//         setWeather(result);
//         setCity('');
//         console.log(result);
//       });
//   }
// }


// const format_date = (d) => {
//   let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
//   let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

//   let day = days[d.getDay()];
//   let date = d.getDate();
//   let month = months[d.getMonth()];
//   let year = d.getFullYear();

//   return `${day} ${date} ${month} ${year}`
// }

//   return (
//     <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>
//       <main className="mainWeather">
//         <div className='search-box'>
//           <label>Введите название города</label>
//           <input
//             type='text'
//             className='search-bar'
//             placeholder='Поиск...'
//             onChange={e => setCity(e.target.value)}
//             value={city}
//             onKeyDown={search}
//           />
//         </div>
//         {(typeof weather.main != 'undefined') ? (
//         <div>
//           <div className='location-box'>
//             <div className='location'>{weather.name}, {weather.sys.country}</div>
//             <div className='date'>{format_date(new Date())}</div>
//           </div>
//           <div className='weather-box'>
//             <div className='temp'>
//               {Math.round(weather.main.temp)}°c
//             </div>
//             <div className='weather'>{weather.weather[0].main}</div>
//           </div>
//         </div>
//         ) : ('')}
//       </main>
//       </div>
//   )
// }




import React from 'react';
import { useState } from 'react';
import './WeatherComp.css'


export default function Forecast() {
  const api = {
    key: 'c7616da4b68205c2f3ae73df2c31d177',
    base: 'http://api.openweathermap.org/data/2.5/'
  }

  const [city, setCity] = useState('');


const [weather, setWeather] = useState({});



const search = evt => {
  if (evt.key === 'Enter') {
    fetch(`${api.base}weather?q=${city}&units=metric&appid=${api.key}`) 
      .then(res => res.json())  
      .then(result => {         
        setWeather(result);
        setCity('');
        console.log(result);
      });
  }
}


const format_date = (d) => {
  let months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
  let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`
}

  return (
    <div className='weatherContainer'>
      <main className="mainWeather">
        <div className='search-box'>
          <label className='textLabel'>Введите название города:</label>
          <input
            type='text'
            className='search-bar'
            placeholder='Поиск...'
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyDown={search}
          />
        </div>
        {(typeof weather.main != 'undefined') ? (
        <div>
          <div className='location-box'>
            <div className='location'>{weather.name}, {weather.sys.country}</div>
            <div className='date'>{format_date(new Date())}</div>
          </div>
          <div className='weather-box'>
            <div className='temp'>
              {Math.round(weather.main.temp)}°c
            </div>
            <div className='weather'>{weather.weather[0].main}</div>
          </div>
        </div>
        ) : ('')}
      </main>
      </div>
  )
}