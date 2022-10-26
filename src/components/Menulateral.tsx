import { iconeAjustes, iconeNew, iconeCasa, iconeContador, iconeInsights } from "./icons/index";
import Logo from "./logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
    return (
        <aside>
            <div className={`flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to bg-purple-300 h-20 w-20`}>
                <Logo />
            </div>
            <ul>
                <MenuItem url="/" texto="Página Inicial" icone={iconeCasa} />
                <MenuItem url="openos" texto="Abrir OS" icone={iconeNew} />
                <MenuItem url="tableos" texto="Gerenciar OS" icone={iconeContador} />
                <MenuItem url="insights" texto="Insights" icone={iconeInsights} />
                <MenuItem url="ajustes" texto="Ajustes" icone={iconeAjustes} />
            </ul>
        </aside>
    )
}