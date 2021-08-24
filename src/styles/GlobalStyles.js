import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
.darkTheme{
  --blue-color:#01a292;
  --primairy-color:#f9b82c;
  --secondary-color:#f6d602;
  --danger:#df3030;
  --success:green;
  --font-color:#b1b1b1;
  --strong-font-color:#fff;
  --light-font-color:#444445;
  --primairy-bg:#262626;
  --secondary-bg:#0e0e0e;
  --phone-nav-bg:#333;
  --min-width:320px;
  --max-width:1100px;
  --all-width:100vw;
  --max-width-form:700px;
}
.lightTheme{
  --blue-color:#01a292;
  --primairy-color:#f6d602;
  --secondary-color:#f9b82c;
  --danger:#df3030;
  --success:green;
  --font-color:#444445;
  --strong-font-color:#0a0a0a;
  --light-font-color:#444445;
  --primairy-bg:#fff;
  --secondary-bg:#f6d602;
  --phone-nav-bg:#b6b6b6;
  --min-width:320px;
  --max-width:1100px;
  --all-width:100vw;
  --max-width-form:700px;
}

*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
html{
  scroll-behavior: smooth;
}
body{
  min-height:100vh ;
  max-width: 100vw;
  position: relative;
  color:var(--font-color);
  background-color: var(--primairy-bg);
}
a{
  text-decoration: none;
  color: inherit;
}
ul{
  list-style: none;
}
button{
  outline: none;
  border:none;
  cursor: pointer;
}
//global items
.containerThemeToggler{
  display: flex;
  justify-content: center;
  align-items: center;
  width:45px;
  height: 45px;
  border-radius: 50%;
  background-color: var(--primairy-bg);
  .themeToggler{
  color:var(--strong-font-color);
  font-size: 2rem;
  }
}
.particle-con {
  >*{
    z-index:-1;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      background-color: var(--primairy-bg);
    }
  }
.cancel{
 padding :9px 20px ;
 color:var(--strong-font-color);
 font-weight:400;
 background-color: #444445;
 min-width: 200px;
 text-align: center;
 cursor: pointer;
 display: flex;
 align-items: center;
 justify-content: center;
}
.update{
  display: flex;
  align-items: center;
  justify-content: center;
 padding :9px 20px ;
 color:var(--strong-font-color);
 font-weight:400;
 background-color: var(--success);
 min-width: 200px;
 text-align: center;
 cursor: pointer;
}
.delete{
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  min-width: 200px;
  padding :9px 20px ;
  color:var(--strong-font-color);
  font-weight:400;
  background-color: var(--danger);
}
.getRole{
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  min-width: 200px;
 padding :9px 20px ;
 color:var(--strong-font-color);
 font-weight:400;
 background-color: var(--blue-color);
}
.titlePage {
  text-transform: uppercase;
    height: 70px;
    text-align: center;
    font-size: 2.1rem;
    font-weight: 600;
    color: var(--blue-color);
  }
  .form {
    gap: 10px;
    min-height: 400px;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    @media screen and (max-width:374px){
      padding: 0;
    }
    /* align-items: center; */
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0 auto;
    width: 100%;
    max-width: var(--max-width-form);
    label {
      text-transform: capitalize;
      font-size: 1.1rem;
      color: var(--primairy-color);
    }
    button{
      width: 240px;
      align-self: center;
    }
  }
form{
  overflow: hidden;
  input{
    align-self: center;
    outline: none;
    padding: 9px 0 9px 11px;
    width: 90%;
  }
}
.signOut{
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
  background-color: var(--danger);
  color: #fff;
  
}
.signIn{
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  height: 40px;
  border-radius: 20px;
  width: 200px;
  font-weight: 400;
  font-size: 1.1rem;
  background-color: var(--blue-color);
  color: #fff;
  
}
@media screen and (max-width:599px){
  .navPx{
    display: none;
  }
}
.top {
      opacity: 0.8;
      padding: 2rem 3rem;
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
`;

export default GlobalStyles;
