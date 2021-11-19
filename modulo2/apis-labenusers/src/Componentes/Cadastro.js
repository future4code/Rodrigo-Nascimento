import React from "react";
import styled from "styled-components"
import axios from "axios";

const EstiloCadastro = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

button{
    margin: 20px;
}
`

class Cadastro extends React.Component {

    state = {
        userName: "",
        userEmail: "",
        id: [],
        user: {}
    }

    createUser = () =>{

        const body = {
            name: this.state.userName,
            email: this.state.userEmail
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,
        {
            headers: {
                Authorization: "rodrigo-santos-carver"
            }
        }).then((res) =>{
            alert("Pessoa cadastrada com sucesso", res.data)

        }).catch((err) =>{
            alert("Erro ao cadastrar", err.response.data)
        })
    }

    getAllUsers = () =>{
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
            headers: {
                Authorization: "rodrigo-santos-carver"
            }
        }).then((res) =>{
            this.setState({id: res.data})
        }).catch((err) =>{
            console.log("erro", err.response.data)
        })
    }

    deleteUser(id, e) {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
        {
            headers:{
                Authorization: "rodrigo-santos-carver"
            }
        }).then((res) =>{
            this.setState({user: res.data})
        }).catch((err) =>{
            alert("Erro", err.response.data)
        })
    }

    onChangeInputUserEmail = (event) =>{
        this.setState ({userEmail: event.target.value})
    }

    onChangeInputUserName = (event) =>{
        this.setState ({userName: event.target.value})   
    }

    
    render() {
        const users = this.state.id.map((user) =>{
            return (
                <li>
                    {console.log(this.state.id)}
                    {user.name}
                    <button onClick={() => this.deleteUser(user.id)}>Deletar Usuário</button>
                </li>
            )
        })
       
        return (

            <EstiloCadastro>
                <h1>Cadastro Usuário</h1>
                <form>
                    <label for="email">E-mail:</label>
                    <input type="text" id="email" onChange={this.onChangeInputUserEmail}/>
                    <br />
                    <br />
                    <label for="name">Nome:</label>
                    <input type="text" id="name" onChange={this.onChangeInputUserName}/>
                </form>
                <button onClick={this.createUser}>Enviar</button>
                <button onClick={this.getAllUsers}>Usuários</button>
                {users}
            </EstiloCadastro>    
        )
    }
}

export default Cadastro