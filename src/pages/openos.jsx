import React from "react";
import Layout from "../components/Layout";

export default function abrirOs(){
    return(
        <Layout titulo="Abrir OS" subtitulo="">
        <div>
        <section id="cadastro">
            <div className="container">
                <form>
                    <input type="number" id="id" hidden/>

                    <div className="mb-3">
                        <label> Nome: </label>
                        <input className={`
                    px-4 py-3 rounded-lg bg-gray-200 mt-2
                    border focus: border-blue-500 
                    focus:bg-white focus:outline-none
                `} type="text" name="nome " id="nome"/>
                    </div>

                    <div className="mb-3">
                        <label> Idade </label>
                        <input className={`
                    px-4 py-3 rounded-lg bg-gray-200 mt-2
                    border focus: border-blue-500 
                    focus:bg-white focus:outline-none
                `} type="text" name="idade " id="idade"/>
                    </div>

                    <div className="mb-3">
                        <label> Posicao </label>

                        <select className={`
                    px-4 py-3 rounded-lg bg-gray-200 mt-2
                    border focus: border-blue-500 
                    focus:bg-white focus:outline-none
                `} name="posicao" id="posicao" aria-label="Default select example">
                            <option selected>Selecione a posição</option>
                            <option value="GOL">GOL</option>
                            <option value="ZAG">ZAG</option>
                            <option value="LAT">LAT</option>
                            <option value="MEI">MEI</option>
                            <option value="ATA">ATA</option>
                          </select>

                    </div>

                    <div className="mb-3">
                        <label> Overall </label>
                        <input className={`
                    px-4 py-3 rounded-lg bg-gray-200 mt-2
                    border focus: border-blue-500 
                    focus:bg-white focus:outline-none
                `} type="text" name="overall " id="overall"/>
                    </div>

                    <div className="mb-3">
                        <label> Habilidade </label>

                        <select className={`
                    px-4 py-3 rounded-lg bg-gray-200 mt-2
                    border focus: border-blue-500 
                    focus:bg-white focus:outline-none
                `} name="habilidade" id="habilidade" aria-label="Default select example">
                            <option selected>Selecione o nível de habilidade</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                          </select>
                    </div>
                    <button> Confirmar </button>
                   </form>
            </div>
            </section>

            <section id="consulta">
            <div className="container">
                <table className="table">
                    <thead>
                        <th> Nome </th> <th> Idade </th>
                        <th> POS </th> <th> OVR </th>  <th> Habilidade </th>
                        <th> </th> <th> </th>
                    </thead>
                    <tbody id="conteudoTabela"></tbody>
                </table>
            </div>
        </section>
        </div>
    </Layout>
    )
}