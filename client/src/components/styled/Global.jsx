import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;400;500;600;700;800&family=Montserrat:wght@300;400;600;700;800&display=swap');
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', sans-serif;
        font-size: 18px;
        background-color: #3E4C72;
    }

    input, button {
        font: inherit
    }
`;

export default GlobalStyles;
