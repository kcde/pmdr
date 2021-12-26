import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
${reset}

body{
    background-color: #1E213F;
    font-family: 'Kumbh Sans', sans-serif;
}
h1,h2,h3,h4{
    font-weight: 600;
}
h1{
    font-size:6.25rem;
    line-height:7.5rem;
    letter-spacing: -5px;
}
h2{
    font-size: 1.25rem;
    line-height:2.125rem;

}

h3{
    font-size:11px;
    line-height: 11px;
    letter-spacing:4px;
    text-transform: uppercase;
}

h4{
    font-size:12px;
    font-weight: 700;
    line-height:1rem;
}

button{
    background: none;
    border:none;
}

@media screen and (min-width: 920px) {

    h2{
    font-size:28px
    }
    h3{
    font-size:13px;
    }
  }

`;
