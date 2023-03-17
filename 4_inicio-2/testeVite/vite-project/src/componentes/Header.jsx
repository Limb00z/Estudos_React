import  React  from "react";
import Logo from '../assets/react.svg'

export default function Header () {
    return (
        <div className="logo">
            <img src="./vite.svg" />
            
            <img src={Logo} /> 
        </div>
    );

};