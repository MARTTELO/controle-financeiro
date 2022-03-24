import { Link } from 'react-router-dom';

export default function Navbar() {

    return (

        <ul>
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/company">SOBRE</Link>
            </li>
            <li>
                <Link to="/contact">CONTATO</Link>
            </li>
            <li>
                <Link to="/newProject">NOVO ORÇAMENTO</Link>
            </li>

        </ul>

    )

}