import React, { useEffect, useState } from "react"
import { getConcursos, getConcursosById, getLoterias } from "../../requests/apiRequests"
import { HomeContainer, Circle } from "./styled"
import logo from "../../assets/logo.png"


export const HomePage = () => {
  const [id, setId] = useState(0)
  const [lottery, setLottery] = useState([])
  const [contest, setContest] = useState([])
  const [contestInfo, setContestInfo] = useState([])
  const [drawResult, setDrawResult] = useState([])

  useEffect(() => {
    getLoterias(setLottery)
    getConcursos(setContest)
    getConcursosById(contestResult, setDrawResult, setContestInfo)
  }, [id])

  const selectOptions = lottery.map((res) => {
    return (
      <option value={res.id} key={res.id}>{res.nome.toUpperCase()}</option>
    )
  })

  const contestName = lottery && lottery.filter((res) => {
    if (res.id === Number(id)) {
      return res.nome
    }
  }).map((res) => {
    const name = res.nome.toUpperCase()
    return (
      <div className="result-logo" key={res}>
        <img src={logo} alt="imagem trevo" />
        <p>
          {name}
        </p>
      </div>
    )
  })

  const contestResult = contest && contest.filter((res) => {
    if (res.loteriaId === Number(id)) {
      return res
    }
  }).map((res) => {
    return res.concursoId
  })

  const contestNumbers = drawResult.map((res) => {
    return (
      <div className="circle" key={res}>
        {res}
      </div>
    )
  })

  const contestNameAndDate = contestInfo.map((res) => {
    return (
      <div className="name-and-date" key={res}>
        {res.id} - {new Date(res.data).toLocaleDateString()}
      </div>
    )
  })

  return (
    <HomeContainer>
      <div className="left-side">
        <select onChange={e => setId(e.target.value)}>
          {selectOptions}
        </select>
        <div>
          {contestName}
        </div>
        <div className="contest-title">
          <p>
            CONCURSO
          </p>       
            {contestNameAndDate}
        </div>
      </div>
      <div className="right-side">
        <div className="balls">
          {contestNumbers}
        </div>
        <p className="disclaimer">
          Este sorteio é meramente ilustrativo e não possui nenhuma ligação com a CAIXA.
        </p>
      </div>
    </HomeContainer>
  )
}