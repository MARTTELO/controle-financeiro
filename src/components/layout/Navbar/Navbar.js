import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import logo from '../../../img/costs_logo.png'
import Container from '../Container/Container'

export default function Navbar() {

    return (

        <nav className={styles.navbar}>
            <Container>
                <Link to="/">
                    <img src={logo} alt="logo" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}><Link to="/">HOME</Link></li>
                    <li className={styles.item}><Link to="/company">SOBRE</Link></li>
                    <li className={styles.item}><Link to="/budgets">ORÇAMENTOS</Link></li>
                    <li className={styles.item}><Link to="/newBudget">NOVO ORÇAMENTO</Link></li>
                    <li className={styles.item}><Link to="/contact">CONTATO</Link></li>
                </ul>
            </Container>
        </nav>
    )






}