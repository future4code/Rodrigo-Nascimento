import React, { useEffect, useState } from "react"
import { getConcursos, getConcursosById, getLoterias } from "../../requests/apiRequests"
import { HomeContainer } from "./styled"
import logo from "../../assets/logo.png"


export const HomePage = () => {
  const [id, setId] = useState(0)
  const [lottery, setLottery] = useState([])
  const [contest, setContest] = useState([])
  const [contestInfo, setContestInfo] = useState([])
  const [drawResult, setDrawResult] = useState([])
  const [teste111, setTeste111] = useState([])
 
  useEffect(() => {
    getLoterias(setLottery)
    getConcursos(setContest, setTeste111)
    // getConcursosById(contestResult, setDrawResult, setContestInfo)
  }, [])

  useEffect(() => {
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
      <div>
        <img src={logo} alt="imagem trevo" />
        {name}
      </div>
    )
  })

  const contestResult = contest && contest.filter((res) => {
    if (res.loteriaId === Number(id)) {
      // contestId = res.concursoId
      return res
    }
  }).map((res) => {
    return res.concursoId
  })

  const teste131231 = drawResult.map((res) => {
    return(
      <div>
        {res}
      </div>
    )
  })
  console.log(contestResult, "constest")


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
          {/* <p>{contestResult}</p> */}
        </div>
      </div>
      <div>
      {teste131231}
        parte direitaa
      </div>
    </HomeContainer>
  )
}