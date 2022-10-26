import Titulo from "./title"

interface CabecalhoProps{
    titulo:string
    subtitulo:string
}
export default function Cabecalho(Props:CabecalhoProps){
    return(
        <div>
            <Titulo titulo={Props.titulo}
            subtitulo={Props.subtitulo}/>
        </div>
    )
}