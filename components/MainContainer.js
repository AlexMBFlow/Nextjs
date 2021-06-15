import CustomRef from "./CustomRef";
import style from "../styles/MainContainer.module.css"

const MainContainer = ({children}) => {
    return (
        <div>
            <div className={style.navbar}>
                <CustomRef href={'/'} text={'Главная'}/>
                <CustomRef href={'/users'} text={'Пользователи'}/>
            </div>
            <div>
                {children}
            </div>

        </div>
    );
};

export default MainContainer;