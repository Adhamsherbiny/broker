'use client'
import { useRef } from "react";
import "./homepage.css";
export default function Home() {
  const singup = useRef<any>()
  const login = useRef<any>()

  function singupSection(){
    singup.current.style.display = "flex";
    login.current.style.display = "none";
  }
  function loginSection(){
    login.current.style.display = "flex";
    singup.current.style.display = "none";
  }
  return (
    <main className="homepage">
      <div className="container">
        <div className="singup" ref={singup}>
          <div className="txt">
            <p>Hello, Welcome to Real Estate Website</p>
            <p>Sing up now for free to get a new offers</p>
            <p>Already have Account <span onClick={loginSection}>Login</span></p>
          </div>
          <form action="" method="post" autoComplete="off">
            <div className="f-d">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div className="f-d">
              <label htmlFor="singup-username">Username</label>
              <input type="text" id="singup-username" />
            </div>
            <div className="f-d">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div className="f-d">
              <label htmlFor="singup-password">Password</label>
              <input type="password" id="singup-password" />
            </div>
            <div className="f-d">
              <label htmlFor="phone">Phone</label>
              <input type="tel" id="phone" />
            </div>
            <div className="f-d">
              <label htmlFor="birthdate">Birthdate</label>
              <input type="date" id="birthdate" />
            </div>
            <div className="f-d">
              <input type="checkbox" id="chk"/>
              <label htmlFor="chk">I have read privacy</label>
            </div>
            <input type="submit" value="Sing up" className="action-btn" />

          </form>
        </div>
        <div className="login" ref={login}>
          <div className="txt">
            <p>Hello, Welcome to Real Estate Website</p>
            <p>Login to use your offers</p>
            <p>Do not have Account <span onClick={singupSection}>Sing Up</span></p>
          </div>
          <form action="" method="post" autoComplete="off">
          <div className="f-d">
              <label htmlFor="login-username">Username</label>
              <input type="text" id="login-username" />
            </div>
            <div className="f-d">
              <label htmlFor="login-password">Password</label>
              <input type="password" id="login-password" />
            </div>
            <input type="submit" value="Login" className="action-btn" />
          </form>
        </div>
      </div>
    </main>
  );
}
