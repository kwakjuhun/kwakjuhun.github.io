import React from 'react';
import styled from 'styled-components';
import { useThemeChange, useThemeState } from '../../providers/themeContext';


const Toggle = styled.div`
  position: absolute;
  top:5px;
  right:5px;
`;

const Label = styled.label.attrs({ htmlFor:"check" })`
  width: 40px;
  height: 40px;
  display: block;
  background-size: contain;
  background-repeat: no-repeat; 
`

const Checkbox = styled.input`
  display:none;
  & + ${Label}{
    background-image:url("${`sun.png`}");
  }
  &:checked + ${Label} {
    background-image:url("${`moon.png`}");
  }
`

const DarkmodeToggle = () => {
  return (
    <Toggle>
      <Checkbox id="check" type='checkbox' defaultChecked={useThemeState()} onClick={useThemeChange({type:"change"})}></Checkbox>
      <Label></Label>
    </Toggle>
  )
}
export default DarkmodeToggle;