import { useEffect, useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import Switch from "@material-ui/core/Switch";
import { BrowserRouter, Link, Route, Switch as swap } from "react-router-dom";
import styled from "styled-components";
import { MainContainer } from "./styles/Layouts";

function App() {
  const [theme, setTheme] = useState("darkTheme");
  const [checked, setChecked] = useState(false);
  const [activeNav, setActiveNav] = useState(false);
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "lightTheme") {
      setTheme("darkTheme");
      setChecked(false);
    } else {
      setTheme("lightTheme");
      setChecked(true);
    }
  };
  return (
    <BrowserRouter>
      <StyledApp>
        <header>
          <nav>
            <div className="logo">
              <img src="./images/fixed/logo.png" alt="Elite" />
              <span>elite</span>
            </div>
            <ul className="links">
              <li>
                <a href="#HowToJoin">howToJoin</a>
              </li>
              <li>rules</li>
              <li>discord</li>
              <li>getRole</li>
              <li>
                <Switch
                  value=""
                  checked={checked}
                  inputProps={{ "aria-label": "" }}
                  size="medium"
                  onClick={themeToggler}
                />
              </li>
            </ul>
            <div className="btns">
              <button className="register">register</button>
              <button className="signIn">signIn</button>
            </div>
            <div
              className={activeNav ? "humberger active" : "humberger"}
              onClick={() => setActiveNav(!activeNav)}
            >
              <div></div>
              <div></div>
              <div></div>
            </div>
          </nav>
        </header>
        <div className={activeNav ? "navPhone activeNav" : "navPhone"}>
          <ul className="links">
            <li>howToJoin</li>
            <li>rules</li>
            <li>discord</li>
            <li>getRole</li>
            <li>
              <Switch
                value=""
                checked={checked}
                inputProps={{ "aria-label": "" }}
                size="medium"
                onClick={themeToggler}
              />
            </li>
            <li className="register btn">register</li>
            <li className="signin btn">signin</li>
          </ul>
        </div>
        <MainContainer>
          <Route component={HomeScreen} />
        </MainContainer>
        <footer>
          <div className="top">
            <h1>Don't Miss Out!</h1>
            <p className="now">
              Register now and unlock features, abilites and More!
            </p>
            <form>
              <div className="input">
                <label htmlFor="username">username:</label>
                <input type="text" id="username" placeholder="username..." />
              </div>
              <div className="input">
                <label htmlFor="email">email:</label>
                <input type="email" id="email" placeholder="email" />
              </div>
              <div className="input">
                <label htmlFor="passowrd">passowrd:</label>
                <input
                  type="passowrd"
                  id="passowrd"
                  placeholder="password..."
                />
              </div>
              <div className="input">
                <label htmlFor="confirm">confirm passowrd:</label>
                <input
                  type="passowrd"
                  id="confirm"
                  placeholder="confirm password..."
                />
              </div>
              <div className="btncont">
                <button>Register</button>
              </div>
            </form>
            <p className="dont">
              Already have an account? <a href="#">SignIn</a>
            </p>
          </div>
          <div className="bottom">All rights reserved</div>
        </footer>
      </StyledApp>
    </BrowserRouter>
  );
}
const StyledApp = styled.main`
  header {
    z-index: 20;
    background-color: var(--primairy-color);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    max-width: 100vw;
    nav {
      opacity: 0.8;
      margin: 0 auto;
      max-width: var(--max-width);
      min-width: var(--min-width);
      padding: 9px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      :hover {
        opacity: 1;
      }
      .logo {
        display: flex;
        align-items: center;
        img {
          height: 50px;
          width: 90px;
        }
        span {
          color: var(--strong-font-color);
          font-weight: 500;
          font-size: 1.7rem;
          text-transform: capitalize;
        }
      }
      .links {
        display: flex;
        align-items: center;
        justify-content: space-between;
        li {
          cursor: pointer;
          color: var(--primairy-bg);
          margin-right: 15px;
        }
        @media screen and (max-width: 998px) {
          display: none;
        }
      }
      .btns {
        display: flex;
        button {
          text-transform: capitalize;
          height: 40px;
          border-radius: 20px;
          width: 100px;
          font-weight: 400;
          font-size: 1.1rem;
        }
        .signIn {
          background-color: var(--blue-color);
          color: #fff;
          margin-left: 15px;
        }
        .register {
          background-color: #fff;
          color: var(--blue-color);
        }
        @media screen and (max-width: 998px) {
          display: none;
        }
      }
      .humberger {
        transition: all 0.3s ease-in;
        display: none;
        @media screen and (max-width: 998px) {
          div:nth-child(1) {
            transition: all 0.3s ease-in;
            transform: rotate(0) translate(0);
            transform-origin: top left;
          }
          div:nth-child(3) {
            transition: all 0.3s ease-in;
            transform: rotate(0) translate(0);
            transform-origin: bottom left;
          }
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: column;
          height: 40px;
          width: 40px;
          div {
            background-color: var(--strong-font-color);
            height: 4px;
            width: 100%;
          }
        }
      }
      .humberger.active {
        transition: all 0.3s ease-in;
        div:nth-child(1) {
          transition: all 0.3s ease-in;
          transform: rotate(45deg) translate(7px, -6px);
          transform-origin: top left;
          width: 50px;
        }
        div:nth-child(2) {
          transition: all 0.3s ease-in;
          background-color: transparent;
        }
        div:nth-child(3) {
          width: 50px;
          transition: all 0.3s ease-in;
          transform: rotate(-45deg) translate(7px, 6px);
          transform-origin: bottom left;
        }
      }
    }
  }
  .navPhone {
    display: none;
    @media screen and (max-width: 998px) {
      display: block;
      transition: 0.4s ease-in-out;
      overflow: hidden;
      position: fixed;
      padding-top: 68px;
      top: 0;
      right: 0;
      left: calc(0px - var(--all-width));
      width: var(--all-width);
      height: 100vh;
      background-color: var(--phone-nav-bg);
      .links {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        .btn {
          width: 140px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 20px;
        }
        .signin {
          color: var(--blue-color);
          background-color: #fff;
        }
        .register {
          color: #fff;
          background-color: var(--blue-color);
        }
      }
    }
  }
  .navPhone.activeNav {
    left: 0;
  }
  footer {
    width: 100%;
    .top {
      opacity: 0.8;
      padding: 2rem 3rem;
      opacity: 0.7;
      :hover {
        opacity: 1;
      }
      @media screen and (max-width: 399px) {
        padding: 1rem 1.5rem;
      }
      h1 {
        color: var(--strong-font-color);
        font-weight: 600;
      }
      .now {
        font-size: 0.9rem;
      }
      form {
        padding: 20px 0;
        width: 100%;
        gap: 20px;
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        @media screen and (max-width: 1130px) {
          justify-content: left;
        }
        .input {
          flex-wrap: wrap;
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 500px;
          label {
            width: 150px;
          }
          input {
            padding: 4px;
            width: 280px;
          }
        }
        .btncont {
          width: 100%;
          button {
            text-transform: capitalize;
            width: 100%;
            max-width: 280px;
            font-weight: 400;
            font-size: 1.1rem;
            padding: 7px;
            background-color: var(--blue-color);
            color: #fff;
            margin: 0 auto;
          }
        }
      }
      .dont {
        font-size: 0.9rem;
        color: var(--light-font-color);
        a {
          color: var(--blue-color);
        }
      }
    }
    .bottom {
      border-top: 2px solid #f9b82c;
      padding: 7px;
      font-size: 1.1rem;
      font-weight: 400;
      background-color: var(--secondary-color);
      text-align: center;
      color: #262626;
    }
  }
`;

export default App;
