import React, { useEffect, useState } from "react"
import { getLoterias } from "../../requests/apiRequests"
import { HomeContainer } from "./styled"
import logo from "../../assets/logo.png"


export const HomePage = () => {
  const [id, setId] = useState([])
  const [name, setName] = useState([])
  const [result, setResult] = useState([])

  useEffect(() => {
    getLoterias(setResult, setId, setName)
  }, [])

  const selectOptions = result.map((res) => {
    const name = res.nome.toUpperCase()
    return (
      <option>{name}</option>
    )
  })

  return (
    <HomeContainer>
      <div className="left-side">
        <select>
          {selectOptions}
        </select>
        <div>
          <img src={logo} alt="imagem trevo" />
          MEGASENA
        </div>
        <div>
          Concurso
          <p>NÚMEROS ALEATÓRIOS</p>
        </div>
      </div>
      <div>
        parte direita
      </div>
    </HomeContainer>
  )
}