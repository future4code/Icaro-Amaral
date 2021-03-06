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
      inputValue: '',
      filtro: ''
    }

    componentDidUpdate() {
    }
  
    componentDidMount() {
    }
  
    onChangeInput = e => {
      this.setState({ inputValue: e.target.value });
    };
  
    criaTarefa = () => {
      if (this.state.inputValue) {
        const novaTarefa = {
          id: Date.now(),
          texto: this.state.inputValue,
          completa: false
        };
  
        this.setState({
          tarefas: [...this.state.tarefas, novaTarefa],
          inputValue: ""
        });
      }
    };
  
    selectTarefa = id => {
    }
  
    onChangeFilter = e => {
    }
  
    render() {
      return (
        <div className="App">
          <h1>Lista de tarefas</h1>
          <InputsContainer>
            <input value={this.state.inputValue} onChange={this.onChangeInput} />
            <button onClick={this.criaTarefa}>Adicionar</button>
          </InputsContainer>
          <br />
  
          <InputsContainer>
            <label>Filtro</label>
            <select value={this.state.filter} onChange={this.onChangeFilter}>
              <option value="">Nenhum</option>
              <option value="pendentes">Pendentes</option>
              <option value="completas">Completas</option>
            </select>
          </InputsContainer>
          <TarefaList>
            {this.state.tarefas
              .filter(tarefa => {
                switch (this.state.filter) {
                  case "pendentes":
                    return !tarefa.completa;
                  case "completas":
                    return tarefa.completa;
                  default:
                    return true;
                }
              })
              .map(tarefa => {
                return (
                  <Tarefa
                    completa={tarefa.completa}
                    onClick={() => this.selectTarefa(tarefa.id)}
                  >
                    {tarefa.texto}
                  </Tarefa>
                );
              })}
          </TarefaList>
        </div>
    )
  }
}

export default App
