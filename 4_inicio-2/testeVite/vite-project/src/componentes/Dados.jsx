import React from 'react'

export default function Dados(props) {
  return (
      <section>
          <p>Nome: {props.um}</p>
          <p>Sobrenome: {props.dois}</p> {/*Usa no props um dois tres, pra mostrar que o nome não precisa ser o mesmo*/}
          <p>Idade: {props.tres}</p>
    </section>
  )
}
