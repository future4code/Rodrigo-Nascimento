import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: "",
      filtro: ""
    }


  componentDidUpdate(prevProps, prevState) {

    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))

  };

  componentDidMount() {

    const tarefaStr = localStorage.getItem("tarefas")
    const tarefaObj = JSON.parse(tarefaStr)

    this.setState({tarefas: tarefaObj})

  };

  onChangeInput = (event) => {

    this.setState({inputValue: event.target.value})

  }

  criaTarefa = () => {

    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      filtro: false
    }

    const novaListaTarefa = [... this.state.tarefas, novaTarefa]
    this.setState({tarefas: novaListaTarefa})

  }

  selectTarefa = (id) => {

    const mudaTarefa = this.state.tarefas.map((estado) =>{
      if(id === estado.id){
        const novoEstado = {...estado, completa: !estado.completa
        }
        return novoEstado
      } else{
        return estado
      }
    })

    this.setState({tarefas: mudaTarefa})

  }

  onChangeFilter = (event) => {

    this.setState({filtro: event.target.value})

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
