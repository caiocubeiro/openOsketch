import Layout from "../components/Layout";
import { useState } from "react"


export default function contador() {
    const [num, setNum] = useState(0)

    function add(){
        setNum(num + 1)
    }

    function sub(){
        setNum(num - 1)
    }
    return (
        <Layout titulo="Contador" subtitulo="Exemplo de contador">
        <div className="mt-4">
            <div className="flex">
            <h3>Contador:</h3>
            <h3 className="ml-2 w-10 text-center bg-white">{num}</h3>
            </div>
            <button onClick={add}  className="mt-2 mr-2 w-1/6 bg-gray-500 text-white"> Adicionar </button>
            <button onClick={sub}  className="mt-2 w-1/6 bg-gray-500 text-white"> Remover </button>
        </div>
        </Layout>
    )
}