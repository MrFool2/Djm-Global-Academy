
import React from "react";
import LogoImg from "../../Assests/NavLogo/djmlogo.png";

export default function Logo(props) {
  return (
     <img src={LogoImg} height={props.height} width={props.width} alt="Logo" className="dock-logo-image" />
  )
}