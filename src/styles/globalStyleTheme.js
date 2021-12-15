import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root{
  --first: ${(props) => props.theme.colors.first};
  --second: ${(props) => props.theme.colors.second};
  --third: ${(props) => props.theme.colors.third};
  --fourd: ${(props) => props.theme.colors.fourd};
  --primaryText: ${(props) => props.theme.colors.primaryText};
  --secondaryText: ${(props) => props.theme.colors.secondaryText};
}

html{
  height:200%;
};

body{
  padding: 0;
  margin: 0;
  background: var(--first);
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