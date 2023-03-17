import { Link } from "react-router-dom";

function MainNav() {
    return <header className="bg-sky-600">
        <div className="container mx-auto">
            <div className="grid grid-cols-2 py-4 text-white">
                <div>React Meetups</div>
                <nav>
                    <ul className="flex space-x-4 justify-end">
                        <li className="hover:text-gray-200">
                            <Link to='/'>All Meetups</Link>
                        </li>
                        <li className="hover:text-gray-200">
                            <Link to='/new-meetups'>Add New Meetup</Link>
                        </li>
                        <li className="hover:text-gray-200">
                            <Link to='/favorites'>My Favorites</Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    </header>;
}

export default MainNav;