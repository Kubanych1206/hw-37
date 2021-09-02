
import { Link } from "react-router-dom"
export const Home = () => {
    return (
        <div>
            <header>
                <h2>Выберите один из разделов для перехода:</h2>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/employees'>Employees</Link>
                    </li>
                    <li>
                        <Link to='/contacts'>Contacts</Link>
                    </li>

                </ul>
            </header>
        </div>
    )
}