import axios from "axios"
import { Address } from "../types/Address"

export const pegarInformacaoEndereco = async (cep: string): Promise<Address | null> => {
  try {
    const baseUrl = "https://viacep.com.br/ws"

    const resposta = await axios.get(`${baseUrl}/${cep}/json`)

    const address: Address = {
      logradouro: resposta.data.logradouro,
      bairro: resposta.data.bairro,
      cidade: resposta.data.localidade,
      estado: resposta.data.uf
    }
    return address

  } catch (error: any) {
    console.log(error)
    return null
  }
}

