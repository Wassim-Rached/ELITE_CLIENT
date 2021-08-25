import { useEffect, useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import Switch from "@material-ui/core/Switch";
import { BrowserRouter, Link, Route, Switch as swap } from "react-router-dom";
import styled from "styled-components";
import { MainContainer } from "./styles/Layouts";
import ScrollUpButton from "react-scroll-up-btn";
//data
import { User } from "./data.js";
//screens
import SignInScreen from "./screens/SignInScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import RulesScreen from "./screens/RulesScreen";
import UploadNewsScreen from "./screens/UploadNewsScreen";
//components
import Particle from "./components/Particles";
import DontMiss from "./components/DontMiss";
import UpdateAccountScreen from "./screens/UpdateAccountScreen";
import GetRoleScreen from "./screens/GetRoleScreen";
//icons
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import RuleScreen from "./screens/RuleScreen";

function App() {
  const [theme, setTheme] = useState("darkTheme");
  const [activeNav, setActiveNav] = useState(false);
  const [userInfo, setUserInfo] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "lightTheme") {
      setTheme("darkTheme");
    } else {
      setTheme("lightTheme");
    }
  };
  return (
    <BrowserRouter>
      <div className="particle-con">
        <Particle />
      </div>
      <StyledApp>
        <header>
          <nav>
            <Link to="/">
              <div className="logo">
                <img src="./images/fixed/logo.png" alt="Elite" />
                <span className="navPx">elite</span>
              </div>
            </Link>
            <ul className="links">
              <li onClick={() => setUserInfo(!userInfo)}>Connect</li>
              <li>
                <a href="#HowToJoin">howToJoin</a>
              </li>
              <li>
                <a href="#Discord">Discord</a>
              </li>
              <li>
                <a href="#LastNews">Last News</a>
              </li>
              <li>
                <Link to="/rules">rules</Link>
              </li>
              <li>
                <div className="containerThemeToggler">
                  {theme !== "darkTheme" ? (
                    <Brightness4Icon
                      onClick={themeToggler}
                      className="themeToggler"
                    />
                  ) : (
                    <Brightness7Icon
                      onClick={themeToggler}
                      className="themeToggler"
                    />
                  )}
                </div>
              </li>
              {userInfo ? (
                <li>
                  <div className="signOut">SignOut</div>
                </li>
              ) : (
                ""
              )}
            </ul>
            {userInfo ? (
              <div className="user">
                <Link className="user" to={"/profile/" + User._id}>
                  <span className="navPx">{User.name}</span>
                  <img src={User.profileImage} alt="profileImg" />
                </Link>
              </div>
            ) : (
              <div className="btns">
                <Link to="/register">
                  <div className="register">register</div>
                </Link>
                <Link to="/signin">
                  <div className="signIn">signIn</div>
                </Link>
              </div>
            )}

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
            <li onClick={() => setUserInfo(!userInfo)}>Connect</li>
            <li>
              <a onClick={() => setActiveNav(!activeNav)} href="#HowToJoin">
                howToJoin
              </a>
            </li>
            <li>
              <a onClick={() => setActiveNav(!activeNav)} href="#Discord">
                Discord
              </a>
            </li>
            <li>
              <a onClick={() => setActiveNav(!activeNav)} href="#LastNews">
                Last News
              </a>
            </li>
            <li>
              <Link onClick={() => setActiveNav(!activeNav)} to="/rules">
                rules
              </Link>
            </li>
            <li>
              <div className="containerThemeToggler">
                {theme !== "darkTheme" ? (
                  <Brightness4Icon
                    onClick={themeToggler}
                    className="themeToggler"
                  />
                ) : (
                  <Brightness7Icon
                    onClick={themeToggler}
                    className="themeToggler"
                  />
                )}
              </div>
            </li>
            {!userInfo ? (
              <>
                <li
                  onClick={() => setActiveNav(!activeNav)}
                  className="register btn"
                >
                  <Link to="/register">register</Link>
                </li>

                <li
                  onClick={() => setActiveNav(!activeNav)}
                  className="signin btn"
                >
                  <Link to="/signin">signin</Link>
                </li>
              </>
            ) : (
              <li>
                <div
                  onClick={() => setActiveNav(!activeNav)}
                  className="signOut"
                >
                  SignOut
                </div>
              </li>
            )}
          </ul>
        </div>
        <MainContainer>
          <swap>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/signin" component={SignInScreen} exact />
            <Route path="/register" component={RegisterScreen} exact />
            <Route path="/profile/:userId" component={ProfileScreen} exact />
            <Route
              path="/profile/getRole/:userId"
              component={GetRoleScreen}
              exact
            />
            <Route
              path="/profile/update/:userId"
              component={UpdateAccountScreen}
              exact
            />
            <Route path="/rules" component={RulesScreen} exact />
            <Route path="/rules/:title" component={RuleScreen} exact />
            <Route
              path="/admin/uploadNews"
              component={UploadNewsScreen}
              exact
            />
          </swap>
          {!userInfo ? <DontMiss /> : ""}
        </MainContainer>
        <footer>
          <div className="bottom">All rights reserved</div>
        </footer>
        <div className="toTop">
          <ScrollUpButton
            behavior={"smooth"}
            IconSize={"3rem"}
            appearCoordinate={1200}
          />
        </div>
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
      margin: 0 auto;
      max-width: var(--max-width);
      min-width: var(--min-width);
      padding: 9px;
      display: flex;
      align-items: center;
      justify-content: space-between;
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
        div {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
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
      .user {
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        img {
          margin-left: 7px;
          min-width: 50px;
          max-width: 50px;
          min-height: 50px;
          max-height: 50px;
          border-radius: 50%;
        }
        span {
          color: var(--strong-font-color);
          font-weight: 400;
          font-size: 1.1rem;
        }
        :hover {
          span {
            color: var(--blue-color);
          }
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
  .toTop {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 90;
    position: fixed;
    height: 50px;
    border-radius: 50%;
    width: 50px;
    bottom: 42px;
    left: calc(50vw - 25px);
    right: calc(50vw - 25px);
    button {
      background-color: #f6d6027a;
      :hover {
        background-color: var(--primairy-color);
      }
    }
  }
  .navPhone {
    display: none;
    z-index: 101;
    @media screen and (max-width: 998px) {
      display: block;
      transition: 0.4s ease-in-out;
      overflow: hidden;
      position: fixed;
      top: 68px;
      right: 0;
      left: calc(0px - var(--all-width));
      width: var(--all-width);
      bottom: 0;
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
    .bottom {
      z-index: 92;
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
