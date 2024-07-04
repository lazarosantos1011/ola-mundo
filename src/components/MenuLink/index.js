import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

const MenuLink = ({ to, children }) => {
    //const localizacao = useLocation();

    return (
        /*<Link className={`${styles.link} ${localizacao.pathname === to ? styles.linkDestacado : ""}`} to={to}>
            {children}
        </Link>*/

        <NavLink 
            className={({isActive}) => `${styles.link} ${isActive ? styles.linkDestacado : ""}`} 
            to={to} 
            end
        >
            {children}
        </NavLink>
    )
}

export default MenuLink;