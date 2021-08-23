import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
.darkTheme{
  --blue-color:#01a292;
  --primairy-color:#f9b82c;
  --secondary-color:#f6d602;
  --danger:#df3030;
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
  --font-color:#444445;
  --strong-font-color:#0a0a0a;
  --light-font-color:#444445;
  --primairy-bg:#fff;
  --secondary-bg:#f6d602;
  --phone-nav-bg:#fff;
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
Form{
  input{
    outline: none;
    padding: 9px;
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
