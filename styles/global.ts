import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    margin-top: 80px;
    overflow-x: hidden;

    > div {
    width: 100%;

      > section {
        min-height: calc(100vh - 80px);
        scroll-margin-top: 80px;
      }

      > footer {
        height: 50px;
      }

      > section, > footer {
        width: 100%;
        padding: 0 13%;
      }
    }
  }

  button {
    cursor: pointer;
  }  
`;
