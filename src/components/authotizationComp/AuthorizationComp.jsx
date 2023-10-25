// import { createContext, useContext, useState, Component } from "react";

// import "./AuthorizationComp.css"
// export default class AuthorizationComp extends Component {


// // import Userfront, { SignupForm} from "@userfront/toolkit/react"

//   render() {
//     return (
//       <div className="containerAuth">
                


//     <link
//       href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
//       rel="stylesheet"
//     />
//     <link rel="preconnect" href="https://fonts.googleapis.com" />
//     <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//     <link
//       href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap"
//       rel="stylesheet"
//     />
    
  

      
//       <div class="wrapper-warning">
//         <div class="card">
//           <div class="icon"><i class="fas fa-exclamation-circle"></i></div>
//           <div class="subject">
//             <h3>Внимание!</h3>
//             <p>На данный момент авторизация на этапе разработки,и скоро будет добавлена.</p>
//           </div>
//           {/* <div class="icon-times"><i class="fas fa-times"></i></div> */}
//         </div>
//       </div>
    
//     </div>





      
//     )
//   }
// }
import React from 'react'
import { useState } from 'react'
import Hook from '../Main/Hook'
import "./AuthorizationComp.css"
// import Hook from './Hook'
// import "./Authorization.css"
export default function Authorization() {
    // const [user, setUser] = useState("")
    // const [inputValue, setInputValue] = useState("")
    const [firstName, setFirstName] = useState("")
    const [user, setUser] = Hook("USER", "")


  return (
    <div className="FullWrap">
    <div className="AuthWrapper" >
        {user && (
            <div className='profile'>
                <div>Hi {user}</div>
                <button className="glow-on-hover" onClick={() => setUser("")}>Log Out</button>
            </div>
        )}
        {!user && (
            <div className='main-profile-page'>
                <div className='registration'>
                {/* <label>Ваше имя:</label> */}
                <input className="AuthName" value={firstName}
                onChange={(e) => setFirstName(e.target.value)} placeholder='Имя'/>
                <button className="glow-on-hover" onClick={() => setUser(firstName)}>Войти</button>
                </div>
            </div>
        )}

    </div>
    </div>
  )
}