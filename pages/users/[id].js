import {useRouter} from 'next/router';
import MainContainer from "../../components/MainContainer"
const style = { padding: "15px" }

export default function User({user}) {
    const {query} = useRouter()
    return (
        <MainContainer>
            <div style={style}>
                <h2>Пользователь с id {query.id}</h2>
                <div>Имя пользователя: {user.name}</div>
                <div>Телефон: {user.phone}</div>
                <div>E-mail: {user.email}</div>
            </div>
        </MainContainer>
    )
}

export async function getServerSideProps({params}) {
    const response = await fetch( `https://jsonplaceholder.typicode.com/users/${params.id}` )
    const user = await response.json()
    return {
        props: {user},
    }
}