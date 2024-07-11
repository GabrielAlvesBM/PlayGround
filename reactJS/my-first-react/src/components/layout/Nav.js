import { Link } from "react-router-dom"
import styles from "./Nav.module.css"

function Nav() {
    return (
            <nav>
                <ul className={styles.nav}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
            </nav>
    )
}

export default Nav;