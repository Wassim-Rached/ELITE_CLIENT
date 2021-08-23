import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
.darkTheme{
  --blue-color:#01a292;
  --primairy-color:#f9b82c;
  --secondary-color:#f6d602;
  --font-color:#b1b1b1;
  --strong-font-color:#fff;
  --light-font-color:#444445;
  --primairy-bg:#262626;
  --secondary-bg:#0e0e0e;
  --phone-nav-bg:#333;
  --min-width:320px;
  --max-width:1100px;
  --all-width:100vw;
}
.lightTheme{
  --blue-color:#01a292;
  --primairy-color:#f6d602;
  --secondary-color:#f9b82c;
  --font-color:#444445;
  --strong-font-color:#0a0a0a;
  --light-font-color:#444445;
  --primairy-bg:#fff;
  --secondary-bg:#f6d602;
  --phone-nav-bg:#fff;
  --min-width:320px;
  --max-width:1100px;
  --all-width:100vw;
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
`;

export default GlobalStyles;
