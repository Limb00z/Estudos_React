import  React  from "react";
import Logo from '../assets/react.svg'

export default function Header () {
    return (
        <div className="logo">
            <div>
                <h1>Aprendendo sobre:</h1>
            </div>
            <img src="./vite.svg" />        
            <img src={Logo} /> 
        </div>
    );

};