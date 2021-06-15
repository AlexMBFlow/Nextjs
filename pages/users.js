import Link from "next/link";
import MainContainer from "../components/MainContainer";
import style from "../styles/UserItem.module.css"

const Users = ({users}) => {
    return (
        <MainContainer>
            <div>
                <h1 style={{
                    margin: "10px 10px"
                }}>Список пользователей:</h1>
                <ul>
                    {users.map(user => <li className={style.user} key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                <a style={{textDecoration: "none",
                                fontSize: "1.2em"}}>{user.name}</a>
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps() {
    const response = await fetch( "https://jsonplaceholder.typicode.com/users" )
    const users = await response.json()
    return {
        props: {users}
    }
}