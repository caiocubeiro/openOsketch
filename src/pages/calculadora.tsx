import Layout from "../components/Layout";
import { useState } from "react"


export default function calculadora() {
    const [numSoma, setNumSoma] = useState(0)
    const [numSub, setNumSub] = useState(0)

    function somar(){
        setNumSoma(Number(somaValor1.value) + Number(somaValor2.value))
    }

    function sub(){
        setNumSub(Number(subValor1.value) - Number(subValor2.value))
    }
    return (
        <Layout titulo="Cálculos" subtitulo="Exemplo de soma e subtração">
            <h3>Soma</h3>  
            <div className="flex" id="soma">

            <input id="somaValor1" className="text-center"></input> <h3>+</h3> <input id="somaValor2" className="text-center"></input>
            <h3>=</h3>
            <h1 className="w-10 text-center bg-gray-500 text-white">{numSoma}</h1>
            </div>  
            <button className="mt-4 w-1/4 bg-gray-500 text-white" onClick={somar}>Executar</button>

            
            <br></br>

            <h3>Subtração</h3>
            <div className="flex" id="sub">

            <input id="subValor1" className="text-center"></input> <h3>-</h3> <input className="text-center" id="subValor2"></input>
            <h3>=</h3>
            <h1 className="w-10 text-center bg-gray-500 text-white">{numSub}</h1>
            </div>  
            <button className="mt-4 w-1/4 bg-gray-500 text-white" onClick={sub}>Executar</button>
        </Layout>
    )
}