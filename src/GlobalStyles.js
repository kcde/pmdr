import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyles = createGlobalStyle`
${reset}

body{
    background-color: #1E213F;
    font-family: 'sans-serif';
    font-family: ${({ theme }) => theme.font}
}
h1,h2,h3,h4{
    font-weight: bold;
}
h1{
    font-size:6.25rem;
    line-height:7.5rem;
    letter-spacing: -5px;
}
h2{
    font-size: 28px;
    line-height:2.125rem;

}

h3{
    font-size:1rem;
    line-height:1.1875rem;
    letter-spacing:15px;
    text-transform: uppercase;
}

h4{
    font-size:0.1875rem;
    line-height:1rem;
    letter-spacing:5px;
    text-transform: uppercase;
}

`;
