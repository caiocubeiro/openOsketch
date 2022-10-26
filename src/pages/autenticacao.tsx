import { useState } from "react"
import Link from "../../node_modules/next/link"
import AutInput from "../components/AutInput"

function submeter(){
    return(
        <div></div>
    )
}

export default  function Autentificacao(){
    const [email,setEmail]=useState('')
    const [senha,setSenha]=useState('')
    return(
        <div className="flex items-center justify-center h-screen">
            <div className="hidden md:block mdw-1/2 lg:w2/4">
                <img src="https://source.unsplash.com/random"
                alt="Imagem da tela de autentificacao"
                className="h-screeen w-full"
                />
            </div>
            <div className="m-10 w-full md:w-1/2 lg:w-1/3">
            <div>
                <div className="text-4xl ml-1 mb-10 font-bold "> OS SYSTEM </div>
            </div>
                <AutInput
                    label="Email"
                    tipo="email"
                    valor={email}
                    valorMudou={setEmail}                
                />
                <AutInput
                    label="Senha"
                    tipo="password"
                    valor={senha}
                    valorMudou={setSenha}
                />
                <Link href="./" >
                <button onClick={submeter} className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}>Entrar</button>
                </Link>
            </div>
        </div>
    )
}