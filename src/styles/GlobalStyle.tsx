import { Global, css } from '@emotion/react';

const globalStyle = css`
  * {
    margin: 0;
  }

  body {
    font-family: 'Gamja Flower', cursive;
    box-sizing: border-box;
    padding: 0;
  }
`;

const GlobalStyle = () => {
  return <Global styles={globalStyle} />;
};

export default GlobalStyle;
