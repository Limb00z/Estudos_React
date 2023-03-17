import React from 'react';
import { useState } from 'react'
import Comparacao from '../assets/comparacao.png'

export default function Corpo() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <img src={Comparacao} className="foto" />  {/*Para exibir essa imagem que está no src, precisa importar*/}
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    contador: {count}
                 </button>
            </div>
            <img src="/img/3x4-png.png" /> {/*Como está no Public, não precisa importar no início*/}
        </div>
    );
};