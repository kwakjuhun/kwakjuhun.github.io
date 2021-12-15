import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { useThemeChange, useThemeState } from '../../providers/themeContext';

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

const DarkmodeToggle = () => {
  // const [isDark, setDark] = useState(null)
  // const context = useThemeState()
  // useEffect(() => {
  //   if(context){
  //     setDark(true)
  //   }
  // },[context])

  return (
    <Toggle>
      {/* <Checkbox type="checkbox" defaultChecked={isDark} onClick={useThemeChange({type:"change"})}></Checkbox> */}
      <Checkbox type="checkbox" defaultChecked={useThemeState()} onClick={useThemeChange({type:"change"})}></Checkbox>
      <Slider></Slider>
    </Toggle>
  )
}
export default DarkmodeToggle;