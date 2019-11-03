import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

*{
  margin: 0;
  border: 0;
  outline: 0;
  box-sizing: border-box;
}

html, body, #root{
  height: 100%;
}

*:focus{
  outline: 0
}

body, input, button{
  font: 14px "Roboto", sans-serif;
}

body{
  -webkit-font-smoothing: antialiased !important;
}

button{
  cursor: pointer;
}

a{
  text-decoration: none;
}

ul{
  list-style: none;
}

`;
