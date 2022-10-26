import Layout from "../components/Layout";
import Link from "../../node_modules/next/link";

export default function Ajustes() {
    return (
        <Layout titulo="Ajustes" subtitulo="">
            <div>
            <h3 className="mt-4">Configurações</h3>
            </div>

            <Link href="autenticacao" >
                <button className={`w-50 bg-slate-900 hover:bg-slate-800 text-white rounded-lg px-4 py-3 mt-6`}>Sair</button>
                </Link>
        </Layout>
    )
}