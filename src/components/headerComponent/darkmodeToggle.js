import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useThemeChange, useThemeState } from '../../Contexts';
const Toggle = styled.label`
  position: absolute;
  top:10px;
  right:10px;
  width: 60px;
  height: 34px;
`;


const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  border-radius: 34px;
  transition: .4s;
  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 50%;
  }
`;
const Checkbox = styled.input`
  display:none;
  &:checked + ${Slider}{
    background-color: #2196F3;
  }
  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196F3;
  }
  &:checked + ${Slider}:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
const Aaaa = styled.div`
  width : 100px;
  height : 100px;
  // background:${(props) => props.theme.colors.bgColor};
`;

const DarkmodeToggle = () => {
  const themeChangeFunc = useThemeChange();
  const themeMode = useThemeState().theme;
  console.log(themeMode)
  const darkmode = (e) =>{

  }
  //   const state = !isDarkmode
  //   setIsDarkmode(state)
  //   e.checked = state

  // useEffect(() => {

  // }, [isDarkmode]);

  return (
    <Toggle>
      {/* <Checkbox type="checkbox" defaultChecked={isDarkmode} onClick={darkmode}></Checkbox> */}
      <Checkbox type="checkbox" defaultChecked={themeMode === 'light'? false:true} onClick={()=>themeChangeFunc()}></Checkbox>
      <Slider></Slider>
      <Aaaa></Aaaa>
    </Toggle>
  )
}
export default DarkmodeToggle;