import React from "react";
import Layout from "../components/Layout";


export default function tableOs() {
  return (
    <Layout titulo="Table" subtitulo="">
      <div className="mt-4">
        <table>
          <tr>
            <th>ID</th>
            <th>Nome Cliente</th>
            <th>Titulo OS</th>
            <th>Status OS</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Alfreds Futterkiste</td>
            <td>Instalação camera de segurança</td>
            <td>Finalizada</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Centro comercial Moctezuma</td>
            <td>Inspeção elétrica</td>
            <td>Finalizada</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ernst Handel</td>
            <td>Instalação alarme residencial</td>
            <td>Em progresso</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Island Trading</td>
            <td>Instalação portão elétrico</td>
            <td>Em progresso</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Laughing Bacchus Winecellars</td>
            <td>Instalação alarme residencial</td>
            <td>Novo</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Inspeção elétrica</td>
            <td>Novo</td>
          </tr>
        </table>
      </div>
    </Layout>
  )
}