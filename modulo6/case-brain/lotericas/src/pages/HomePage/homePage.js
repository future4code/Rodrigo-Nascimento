import React, { useEffect, useState } from "react"
import { getConcursos, getConcursosById, getLoterias } from "../../requests/apiRequests"
import { HomeContainer } from "./styled"
import logo from "../../assets/logo.png"


export const HomePage = () => {
  const [id, setId] = useState(0)
  const [lottery, setLottery] = useState([])
  const [contest, setContest] = useState([])
  const [constestId, setContestId] = useState(2359)
  const [drawResult, setDrawResult] = useState([])

  useEffect(() => {
    getLoterias(setLottery)
    getConcursos(setContest, setContestId)
    getConcursosById(constestId, setDrawResult)
  }, [])

  const selectOptions = lottery.map((res) => {
    const name = res.nome.toUpperCase()
    return (
      <option value={res.id}>{name}</option>
    )
  })

  const contestName = lottery.filter((res) => {
    if (res.id === Number(id)) {
      return res.nome
    }
  }).map((res) => {
    const name = res.nome.toUpperCase()
    return (
      <div>
        <img src={logo} alt="imagem trevo" />
        {name}
      </div>
    )
  })

  const contestResult = contest.filter((res) => {
    if (res.loteriaId === Number(id)) {
      return res.concursoId
    }
  }).map((res) => {
    return (
      <div>
        {res.concursoId}
      </div>
    )
  })

  console.log(drawResult)

  return (
    <HomeContainer>
      <div className="left-side">
        <select onChange={e => setId(e.target.value)}>
          {selectOptions}
        </select>
        <div>
          {contestName}
        </div>
        <div>
          Concurso
          <p>{contestResult}</p>
        </div>
      </div>
      <div>
        parte direita
      </div>
    </HomeContainer>
  )
}