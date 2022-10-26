import Link from "../../node_modules/next/link";

interface MenuItemProps{
    url:string
    texto:string
    icone:any
}
export default function MenuItem(Props:MenuItemProps){
    return(
        <li className={`hover:bg-gray-200`}>
            <Link href={Props.url}>
                <a className={`flex flex-col justify-center items-center w-20 h-20`}>
                    {Props.icone}
                    <span className={`text-gray-600 font-light text-xs`}>
                        {Props.texto}
                    </span>
                </a>
            </Link>
            {/* {Props.icone} */}
        </li>
    )
}