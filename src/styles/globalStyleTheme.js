import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

html{
  height:200%;
};

body{
  padding: 0;
  margin: 0;
  background:${(props) => props.theme.colors.first};
  height:200%;
  overflow-x:hidden;
  overflow-y:auto;
}
a{
  text-decoration-line: none;
  color: black;
}
`;

export default GlobalStyle;