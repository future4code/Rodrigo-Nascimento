import React, { useMemo } from "react";
import { useState } from "react/cjs/react.development";
import Countries from "../constants/Countries"

import useForm from "../hooks/useForm";


export default function ApplicationFormPage() {
    const {form, onChange, cleanFields} = useForm ({name:"", age:"", applicationText:"", profession:"", country:""})

   
    const sendForm = (event) => {
        event.preventDefault()

        console.log("enviando", form)
        console.log()

        cleanFields()
    
        
    }

    return (
        <div>
            ApplicationFormPage
            <form onSubmit={sendForm}>

                <select>
                    <option>
                        
                        </option>    
                </select>

                <input
                    name="name"
                    value={form.name}
                    placeholder="Nome"
                    onChange={onChange}
                    required
                    pattern={"^.{3,}$"}
                    title={"O nome deve ter no mínimo 3 letras"}
                />
                <input
                    name="age"
                    value={form.age}
                    placeholder="Idade"
                    onChange={onChange}
                    type={"number"}
                    required
                    min={18}
                
                />
                <input
                    name="applicationText"
                    value={form.applicationText}
                    placeholder="Texto de Aplicação"
                    onChange={onChange}
                    required
                    // pattern={"^.{30,}$"}
                    title={"O texto precisa ter no mínimo 30 caracteres"}
    
                />
                <input
                    name="profession"
                    placeholder="Profissão"
                    onChange={onChange}
                    required
                    pattern={"^.{10,}$"}
                    title={"A profissão precisa ter no mínimo 10 caracteres"}
                
                />

                <input 
                    name="country"
                    placeholder="País"
                    onChange={onChange}
                    
                
                />
                <select />
                <button >Enviar</button>
            </form>

        </div>
        
             
    )
}



