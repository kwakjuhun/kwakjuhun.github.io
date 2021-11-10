import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html{
  height:200%;
};

body{
  padding: 0;
  margin: 0;
  background:${(props) => props.theme.colors.bgColor};
  height:200%;
  overflow-x:hidden;
  overflow-y:auto;
}
`;

export default GlobalStyle;