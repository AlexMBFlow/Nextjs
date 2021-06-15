import Link from "next/link";
import style from '../styles/CustomRef.module.css'

export default function CustomRef({text, href}) {
    return (
        <Link  href={href}>
            <a className={style.link} >{text}</a>
        </Link>
    )
}